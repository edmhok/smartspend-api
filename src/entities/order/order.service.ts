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
      .populate({
        path: 'products',
        populate: {
          path: 'product'
        }
      })
      .populate('merchant')
      .populate('patron')
      .lean();
  }

  async findOne(id: ObjectId): Promise<IOrder> {
    return this.orderModel.findById({_id: id})
      .populate('products')
      .populate({
        path: 'merchant',
        populate: {
          path: 'banks'
        }
      })
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

  async findByBatch(ids: string[]): Promise<IOrder[]> {
    return this.orderModel.find({ _id: { $in: ids } }).lean();
  }

  async create(_order: CreateOrderDto): Promise<IOrder | any> {
    const order = new this.orderModel({
      isPaid: _order.isPaid,
      status: _order.status,
    })

    const merchant = await this.merchantModel.findById({ _id: _order.merchant_id });
    order.merchant = merchant._id;
    const patron = await this.patronModel.findById({ _id: _order.patron_id });
    order.patron = patron._id;
    const products = await this.productsModel.findById({ _id: _order.products_id });
    order.products = [
      {
        product: products._id,
        qty: _order.qty
      }
    ];
    const points = products.points;

    if (merchant.points >= points) {
      return order.save();
    } else {
      return {
        status: "failed",
      };
    }
  }

  async update(id: ObjectId, updateOrderDto: UpdateOrderDto): Promise<IOrder> {
    const order = await this.orderModel.findById(id)
      .populate({
        path: 'products',
        populate: {
          path: 'product'
        }
      })
      .populate('merchant')
      .populate('patron')
      .exec();

    const { products_id, patron_id, merchant_id, qty, isPaid, status} = updateOrderDto;
    
    order.status = status;

    const totalPoints = order.products.reduce((prev, cur) => {
      if(!cur.product) {
        return prev;
      }
      return prev + cur.product.points
    }, 0)

    const patron = await this.patronModel.findById({ _id: order.patron._id });
    const merchant = await this.merchantModel.findById({ _id: order.merchant._id });

    if(!order.isPaid && isPaid === 'true') {
      if (merchant.points >= totalPoints) {
        merchant.points = merchant.points - totalPoints;
        patron.points = patron.points + totalPoints;
  
        merchant.save();
        patron.save();
        order.isPaid = true;
      }
      else {
        console.log(
          "Merchant points out of balance."
        )
      }
    }
    return await order.save();
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.orderModel.findByIdAndDelete({_id: id}).exec();
  }
}
