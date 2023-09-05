import { Injectable } from "@nestjs/common";
import { CreateProductsDto } from "./dto/create-products.dto";
import { UpdateProductsDto } from "./dto/update-products.dto";
import { IProducts } from "./products.model";
import { InjectModel } from "@nestjs/mongoose";
import { Model, ObjectId } from "mongoose";
import { IMerchant } from "../merchant/merchant.model";

// import { User } from "../user/user.entity";
// import { UserRepository } from "../user/user.repository";
// import { Order } from "../order/order.entity";
// import { OrderRepository } from "../order/order.repository";

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Products')
    private readonly productsModel: Model<IProducts>,
    @InjectModel('Merchant')
    private readonly merchantModel: Model<IMerchant>,
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
  async findByBatch(ids: string[]): Promise<IProducts[]> {
    return this.productsModel.find({ _id: { $in: ids } }).lean();
  }

  async create(_products: CreateProductsDto): Promise<IProducts> {
    const merchant = await this.merchantModel.findOne({ _id: _products.merchant}).exec();
    const products = new this.productsModel({
      entryDate: _products.entryDate,
      productName: _products.productName,
      brand: _products.brand,
      description: _products.description,
      photo: _products.photo,
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
      merchant: merchant['_id']
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
    
    products.entryDate = updateProductsDto.entryDate || products.entryDate;
    products.productName = updateProductsDto.productName || products.productName;
    products.brand = updateProductsDto.brand || products.brand;
    products.description = updateProductsDto.description || products.description;
    products.photo = updateProductsDto.photo || products.photo;
    products.sku = updateProductsDto.sku || products.sku;
    products.category = updateProductsDto.category || products.category;
    products.variant = updateProductsDto.variant || products.variant;
    products.size = updateProductsDto.size || products.size;
    products.color = updateProductsDto.color || products.color;
    products.tags = updateProductsDto.tags || products.tags;
    products.price = updateProductsDto.price || products.price;
    products.qty = updateProductsDto.qty || products.qty;
    products.points = updateProductsDto.points || products.points;
    products.discount = updateProductsDto.discount || products.discount;
    products.originalPrice = updateProductsDto.originalPrice || products.originalPrice;

    return await products.save();
  }

  async remove(id: ObjectId): Promise<string | void> {
    const result = await this.productsModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}
