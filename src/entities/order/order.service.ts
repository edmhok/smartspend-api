import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Order } from "./order.entity";
import { OrderRepository } from "./order.repository";
import { CreateOrderDto } from "./dto/create-order.dto";
import { UpdateOrderDto } from "./dto/update-order.dto";
import { MerchantRepository } from "../merchant/merchant.repository";
import { Merchant } from "../merchant/merchant.entity";
import { Patron } from "../patron/patron.entity";
import { PatronRepository } from "../patron/patron.repository";
import { ProductsRepository } from "../products/products.repository";
import { Products } from "../products/products.entity";

@Injectable()
export class OrderService { 
  constructor(
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
    @InjectRepository(Merchant)
    private merchantRepository: MerchantRepository,
    @InjectRepository(Patron)
    private patronRepository: PatronRepository,
    @InjectRepository(Products)
    private productsRepository: ProductsRepository,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['products', 'merchant', 'patron']
    
    });
  }

  async findOne(id: number): Promise<Order> {
    const x = this.orderRepository.findOne({
      where: {
        id: id,
      },
        relations: ['products', 'merchant', 'patron']
    });
    return x;
  }

  async findByDate(createdAt: Date): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        createdAt,
      },
      relations: ['products', 'merchant', 'patron']
    });
  }

  async create(_order: CreateOrderDto): Promise<Order> {
    const order = new Order();

    if (_order.merchant_id) {
      const merchant = await this.merchantRepository.findOne({
        where: { id: _order.merchant_id },
      });
      order.merchant = merchant;
    }
    if (_order.patron_id) {
      const patron = await this.patronRepository.findOne({
        where: { id: _order.patron_id },
      });
      order.patron = patron;
    }
    if (_order.products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: _order.products_id },
      });
      order.products = [products];
    }

    return this.orderRepository.save(order);
  }

  async update(id: number, updateOrderDto: UpdateOrderDto ): Promise<Order> {
    const order = await this.findOne(id);

    const { products_id, patron_id, merchant_id} = updateOrderDto;

    if (products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: products_id },
      });
      order.products = [products];
    }
    if (patron_id) {
      const patron = await this.patronRepository.findOne({
        where: { id: patron_id },
      });
      order.patron = patron;
    }
    if (merchant_id) {
      const merchant = await this.merchantRepository.findOne({
        where: { id: merchant_id },
      });
      order.merchant = merchant;
    }

    return await order.save();
  }

  async remove(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }
}
