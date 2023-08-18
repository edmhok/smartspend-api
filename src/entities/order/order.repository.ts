/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Order } from './order.entity';

@Injectable()
@EntityRepository(Order)
export class OrderRepository extends Repository<Order> {
}