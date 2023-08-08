/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';


@Injectable()
export class ProductsService {
  constructor( 
    @InjectRepository(Products)
    private productsRepository: ProductsRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,
  ) {}

  findAll(): Promise<Products[]> {
    return this.productsRepository.find({});
  }

  async findOne(id: number): Promise<Products> {
    const x = this.productsRepository.findOne({
      where: {
        id : id,
      }
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
    products.description = _products.description;
    products.price = _products.price;
    products.sku = _products.sku;
    products.points = _products.points;
    products.qty = _products.qty;
    

    // if(_products.user_id) {
    //   const user = await this.userRepository.findOne({
    //     where: { id: _products.user_id},
    //   });
    //   products.user = [user];
    // }
  
    return this.productsRepository.save(products);
  }

  async update(
    id: number,
    updateProductsDto: UpdateProductsDto,
  ): Promise<Products> {
    const products = await this.findOne(id);
    
    const { 
        title, 
        description,
        price,
        sku,
        points,
        qty
        } = updateProductsDto;
    products.title = title;
    products.description = description;
    products.price = price;
    products.sku = sku;
    products.points = points;
    products.qty = qty;
  
    // if(user_id) {
    //   const user = await this.userRepository.findOne({
    //     where: { id: user_id },
    //   });
    //   products.user = [user];
    // }
   
    return await products.save();
  }

  async remove(id: number): Promise<void> {
    await this.productsRepository.delete(id);
  }
}
