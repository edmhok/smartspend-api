/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';

@Injectable()
export class OrderService {
  constructor( 
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,
    @InjectRepository(Products)
    private productsRepository: ProductsRepository,
  ) {}

  findAll(): Promise<Order[]> {
    return this.orderRepository.find({
      relations: ['user', 'products'],
    });
  }

  async findOne(id: number): Promise<Order> {
    const x = this.orderRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user', 'products']
    });
    return x;
  }

   async findByDate(createdAt: Date): Promise<Order[]> {
    return await this.orderRepository.find({
      where: {
        createdAt
      },
    });
  }

  async create(_order: CreateOrderDto): Promise<Order> {
    const order = new Order();
    order.status = _order.status;
    order.item_subtotal = _order.item_subtotal;
    order.item_qty = _order.item_qty;
    order.discount = _order.discount;
    order.shipping = _order.shipping;
    order.shipping_fee = _order.shipping_fee;
    order.isPaid = _order.isPaid;
    order.payment_method = _order.payment_method;
    order.tracking = _order.tracking;

    if(_order.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _order.user_id},
      });
      order.user = [user];
    }
    if(_order.products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: _order.products_id},
      });
      order.products = [products];
    }
  
    return this.orderRepository.save(order);
  }

  async update(
    id: number,
    updateOrderDto: UpdateOrderDto,
  ): Promise<Order> {
    const order = await this.findOne(id);
    
    const { date, status, item_subtotal, item_qty, discount, shipping, shipping_fee, isPaid, payment_method, tracking, user_id, products_id } = updateOrderDto;
    order.status = status;
    order.item_subtotal = item_subtotal;
    order.item_qty = item_qty;
    order.discount = discount;
    order.shipping = shipping;
    order.shipping_fee = shipping_fee;
    order.isPaid = isPaid;
    order.payment_method = payment_method;
    order.tracking = tracking;
  
    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      order.user = [user];
    }
    if(products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: products_id },
      });
      order.products = [products];
    }

    return await order.save();
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
