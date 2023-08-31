import { Injectable } from "@nestjs/common";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { Model, ObjectId } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";
import { IMerchant } from "../merchant/merchant.model";
import { IPatron } from "../patron/patron.model";
import { IProducts } from "../products/products.model";
import { IOrder } from "./order.model";

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order')
    private readonly orderModel: Model<IOrder>,
    @InjectModel('Merchant')
    private readonly merchantModel: Model<IMerchant>,
    @InjectModel('Patron')
    private readonly patronModel: Model<IPatron>,
    @InjectModel('Products')
    private readonly productsModel: Model<IProducts>,
  ) {}

  findAll(): Promise<IOrder[]> {
    // @TODO: return points as well in the future
    return this.orderModel.find()
      .populate('products')
      .populate('merchant')
      .populate('patron')
      .lean();
  }

  async findOne(id: ObjectId): Promise<IOrder> {
    return this.orderModel.findById({_id: id})
      .populate('products')
      .populate('merchant')
      .populate('patron')
      .lean();
  }

  async findByDate(createdAt: Date): Promise<IOrder[]> {
    return await this.orderModel.find({ createdAt })
      .populate('products')
      .populate('merchant')
      .populate('patron')
      .lean();
  }

  async create(_order: CreateOrderDto): Promise<IOrder | any> {
    const order = new this.orderModel({
      qty: _order.qty,
      isPaid: _order.isPaid,
      status: _order.status,
    })

    const merchant = await this.merchantModel.findById({ _id: _order.merchant_id });
    order.merchant = merchant._id;
    const patron = await this.patronModel.findById({ _id: _order.patron_id });
    order.patron = patron._id;
    const products = await this.productsModel.findById({ _id: _order.products_id });
    order.products = [products._id];
    const points = products.points;

    if (merchant.points >= points) {
      merchant.points = merchant.points - points;
      patron.points = patron.points + points;

      merchant.save();
      patron.save();
      return order.save();
    } else {
      return {
        status: "failed",
      };
    }
  }

  async update(id: ObjectId, updateOrderDto: UpdateOrderDto): Promise<IOrder> {
    const order = await this.orderModel.findById(id).exec();

    const { products_id, patron_id, merchant_id, qty, isPaid, status} = updateOrderDto;
    order.qty = qty;
    order.isPaid = isPaid;
    order.status = status;

    if (products_id) {
      const products = await this.productsModel.findById({ _id: products_id });
      order.products = [products._id];
    }
    if (patron_id) {
      const patron = await this.patronModel.findById({ _id: patron_id });
      order.patron = patron._id;
    }
    if (merchant_id) {
      const merchant = await this.merchantModel.findById({ _id: merchant_id });
      order.merchant = merchant._id;
    }

    return await order.save();
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.orderModel.findByIdAndDelete({_id: id}).exec();
  }
}
