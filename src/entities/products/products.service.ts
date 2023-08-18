import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Products } from "./products.entity";
import { ProductsRepository } from "./products.repository";
import { CreateProductsDto } from "./dto/create-products.dto";
import { UpdateProductsDto } from "./dto/update-products.dto";

// import { User } from "../user/user.entity";
// import { UserRepository } from "../user/user.repository";
// import { Order } from "../order/order.entity";
// import { OrderRepository } from "../order/order.repository";

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: ProductsRepository,
    // @InjectRepository(User)
    // private userRepository: UserRepository
    // @InjectRepository(Order)
    // private orderRepository: OrderRepository
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find({
      // relations: ['order']
    });
  }

  async findOne(id: number): Promise<Products> {
    const x = this.productsRepository.findOne({
      where: {
        id: id,
      },
      // relations: ['order']

    });
    return x;
  }

  async findByDate(createdAt: Date): Promise<Products[]> {
    return await this.productsRepository.find({
      where: {
        createdAt,
      },
    });
  }

  async create(_products: CreateProductsDto): Promise<Products> {
    const products = new Products();
    products.entryDate = _products.entryDate;
    products.productName = _products.productName;
    products.brand = _products.brand;
    products.description = _products.description;
    products.sku = _products.sku;
    products.price = _products.price;
    products.qty = _products.qty;
    products.points = _products.points;
    products.discount = _products.discount;
    products.originalPrice = _products.originalPrice;

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


    return this.productsRepository.save(products);
  }

  async update(
    id: number,
    updateProductsDto: UpdateProductsDto
  ): Promise<Products> {
    const products = await this.findOne(id);

    const {
      entryDate,
      productName,
      brand,
      description,
      sku,
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

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
