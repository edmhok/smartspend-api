import { Injectable } from "@nestjs/common";
import { CreateProductsDto } from "./dto/create-products.dto";
import { UpdateProductsDto } from "./dto/update-products.dto";
import { IProducts } from "./products.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";

// import { User } from "../user/user.entity";
// import { UserRepository } from "../user/user.repository";
// import { Order } from "../order/order.entity";
// import { OrderRepository } from "../order/order.repository";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<IProducts>,
  ) {}

  findAll(): Promise<IProducts[]> {
    return this.productsModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IProducts> {
    return this.productsModel.findById({_id: id}).lean();
  }

  async findByDate(createdAt: Date): Promise<IProducts[]> {
    return await this.productsModel.find({
      createdAt: createdAt
    }).lean();
  }

  async create(_products: CreateProductsDto): Promise<IProducts> {
    const products = new this.productsModel({
      entryDate: _products.entryDate,
      productName: _products.productName,
      brand: _products.brand,
      description: _products.description,
      sku: _products.sku,
      category: _products.category,
      variant: _products.variant,
      size: _products.size,
      color: _products.color,
      tags: _products.tags,
      price: _products.price,
      qty: _products.qty,
      points: _products.points,
      discount: _products.discount,
      originalPrice: _products.originalPrice,
    });


    // if(_products.user_id) {
    //   const user = await this.userRepository.findOne({
    //     where: { id: _products.user_id},
    //   });
    //   products.user = [user];
    // }
    // if(_products.order_id) {
    //   const order = await this.orderRepository.findOne({
    //     where: { id: _products.order_id},
    //   });
    //   products.order = [order];
    // }


    return products.save();
  }

  async update(
    id: ObjectId,
    updateProductsDto: UpdateProductsDto
  ): Promise<IProducts> {
    const products = await this.productsModel.findById(id).exec();

    const {
      entryDate,
      productName,
      brand,
      description,
      sku,
      category,
      variant,
      size,
      color,
      tags,
      price,
      qty,
      points,
      discount,
      originalPrice,
      order_id,
    } = updateProductsDto;
    products.entryDate = entryDate;
    products.productName = productName;
    products.brand = brand;
    products.description = description;
    products.sku = sku;
    products.category = category;
    products.variant = variant;
    products.size = size;
    products.color = color;
    products.tags = tags;
    products.price = price;
    products.qty = qty;
    products.points = points;
    products.discount = discount;
    products.originalPrice = originalPrice;

    // if(user_id) {
    //   const user = await this.userRepository.findOne({
    //     where: { id: user_id },
    //   });
    //   products.user = [user];
    // }
    // if(order_id) {
    //   const order = await this.orderRepository.findOne({
    //     where: { id: order_id},
    //   });
    //   products.order = [order];
    // }

    return await products.save();
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.productsModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}
