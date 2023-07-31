/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Products } from './products.entity';

@Injectable()
@EntityRepository(Products)
export class ProductsRepository extends Repository<Products> {
  
}