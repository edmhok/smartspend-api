/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreatePointsDto } from "./dto/create-points.dto";
import { UpdatePointsDto } from "./dto/update-points.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { IPoints } from "./points.model";
import { IMerchant } from "../merchant/merchant.model";

@Injectable()
export class PointsService {
  constructor(
    @InjectModel("Points")
    private readonly PointsModel: Model<IPoints>,
    @InjectModel("Merchant")
    private readonly merchantModel: Model<IMerchant>
  ) {}

  findAll(): Promise<IPoints[]> {
    return this.PointsModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IPoints> {
    return this.PointsModel.findById({ _id: id }).lean();
  }

  async create(_points: CreatePointsDto): Promise<IPoints> {
    const orderPoints = new this.PointsModel({
      points: _points.points,
      status: _points.status,
    });

    if (_points.merchant_Id) {
      const merchant = await this.merchantModel
        .findOne({ _id: _points.merchant_Id })
        .exec();
      orderPoints.merchant = merchant;
    }
    await orderPoints.save();
    return orderPoints;
  }

  async update(
    id: ObjectId,
    updateTransactionDto: UpdatePointsDto
  ): Promise<IPoints> {
    const points = await this.PointsModel.findById(id).exec();

    const { status } = updateTransactionDto;
    points.status = status;

    // if(products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: products_id },
    //   });
    //   transaction.products = [products];
    // }
    return await points.save();
  }

  async remove(id: ObjectId): Promise<string | void> {
    const result = await this.PointsModel.findByIdAndDelete({ _id: id }).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}
