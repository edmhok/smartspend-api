/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';

@Injectable()
export class ProductsService {
  constructor( 
    @InjectRepository(Products)
    private productsRepository: ProductsRepository,
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find({
      relations: ['user', 'order'],
    });
  }

  async findOne(id: number): Promise<Products> {
    const x = this.productsRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user', 'order']
    });
    return x;
  }

   async findByDate(createdAt: Date): Promise<Products[]> {
    return await this.productsRepository.find({
      where: {
        createdAt
      },
    });
  }

  async create(_products: CreateProductsDto): Promise<Products> {
    const products = new Products();
    products.title = _products.title;
    products.type = _products.type;
    products.sku = _products.sku;
    products.stock_status = _products.stock_status;
    products.reserved = _products.reserved;
    products.selling_price = _products.selling_price;
    products.old_price = _products.old_price;
    products.purchase_price = _products.purchase_price;
    products.manufacturer = _products.manufacturer;
    products.commodity_group = _products.commodity_group;
    products.product_title = _products.product_title;
    products.variant_title = _products.variant_title;
    products.product_description = _products.product_description;
    products.image_url = _products.image_url;
    products.url_key = _products.url_key;
    products.item_id = _products.item_id;

    if(_products.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _products.user_id},
      });
      products.user = [user];
    }
    if(_products.order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: _products.order_id},
      });
      products.order = [order];
    }
    return this.productsRepository.save(products);
  }

  async update(
    id: number,
    updateProductsDto: UpdateProductsDto,
  ): Promise<Products> {
    const products = await this.findOne(id);
    
    const { 
        title, 
        type, 
        sku, 
        stock_status, 
        reserved, 
        selling_price, 
        old_price, 
        purchase_price, 
        manufacturer, 
        commodity_group, 
        product_title, 
        variant_title, 
        product_description, 
        image_url, 
        url_key, 
        item_id, 
        user_id, 
        order_id } = updateProductsDto;
    products.title = title;
    products.type = type;
    products.sku = sku;
    products.stock_status = stock_status;
    products.reserved = reserved;
    products.selling_price = selling_price;
    products.old_price = old_price;
    products.purchase_price = purchase_price;
    products.manufacturer = manufacturer;
    products.commodity_group = commodity_group;
    products.product_title = product_title;
    products.variant_title = variant_title;
    products.product_description = product_description;
    products.image_url = image_url;
    products.url_key = url_key;
    products.item_id = item_id;
  
    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      products.user = [user];
    }
    if(order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: order_id },
      });
      products.order = [order];
    }

    return await products.save();
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
