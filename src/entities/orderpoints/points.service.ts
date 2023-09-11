/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateOrderPointsDto } from "./dto/create-points.dto";
import { UpdateOrderPointsDto } from "./dto/update-points.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { IPoints } from "./points.model";
import { IMerchant } from "../merchant/merchant.model";

@Injectable()
export class OrderPointsService {
  constructor(
    @InjectModel("Orderpoints")
    private readonly PointsModel: Model<IPoints>,
    @InjectModel("Merchant")
    private readonly merchantModel: Model<IMerchant>
  ) {}

  findAll(): Promise<IPoints[]> {
    return this.PointsModel.find().populate("merchant").lean();
  }

  async findOne(id: ObjectId): Promise<IPoints> {
    return this.PointsModel.findById({ _id: id }).lean();
  }

  async create(_points: CreateOrderPointsDto): Promise<IPoints> {
    const orderPoints = new this.PointsModel({
      points: _points.points,
      status: _points.status,
    });
    // const merchant = await this.merchantModel.findById({ _id: _points.merchant_Id });
    // orderPoints.merchant = merchant._id;

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
    updateTransactionDto: UpdateOrderPointsDto
  ): Promise<IPoints> {
    const points = await this.PointsModel.findById(id).exec();

    const { status } = updateTransactionDto;
    points.status = status;

    // const merchantPoints = await this.merchantModel.findById({ _id: points.merchant._id });

    // if(status === 'accepted') {
    //   merchant.points = merchant.points - totalPoints;
    // }
    return await points.save();
  }

  async remove(id: ObjectId): Promise<string | void> {
    const result = await this.PointsModel.findByIdAndDelete({ _id: id }).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}
