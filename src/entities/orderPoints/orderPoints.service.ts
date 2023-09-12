/* eslint-disable prettier/prettier */
import { Injectable } from "@nestjs/common";
import { CreateOrderPointsDto } from "./dto/create-orderPoints.dto";
import { UpdateOrderPointsDto } from "./dto/update-orderPoints.dto";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { IOrderPoints } from "./orderPoints.model";
import { IMerchant } from "../merchant/merchant.model";

@Injectable()
export class OrderPointsService {
  constructor(
    @InjectModel("OrderPoints")
    private readonly OrderPointsModel: Model<IOrderPoints>,
    @InjectModel("Merchant")
    private readonly merchantModel: Model<IMerchant>
  ) {}

  findAll(): Promise<IOrderPoints[]> {
    return this.OrderPointsModel.find({ status: "pending" })
      .populate("merchant")
      .lean();
  }

  async findOne(id: ObjectId): Promise<IOrderPoints> {
    return this.OrderPointsModel.findById({ _id: id }).lean();
  }

  async create(_points: CreateOrderPointsDto): Promise<IOrderPoints> {
    const orderPoints = new this.OrderPointsModel({
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
  ): Promise<IOrderPoints> {
    const points = await this.OrderPointsModel.findOne({ _id: id }).exec();
    console.log({ points });
    const { status } = updateTransactionDto;
    points.status = status;

    if (status === "accepted") {
      const merchant = await this.merchantModel.findById({
        _id: points.merchant._id,
      });
      merchant.points = merchant.points + points.points;
      merchant.orderPoints.push(points);
      merchant.save();
    }
    return await points.save();
  }

  async remove(id: ObjectId): Promise<string | void> {
    const result = await this.OrderPointsModel.findByIdAndDelete({
      _id: id,
    }).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}
