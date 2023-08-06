/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firstmatrix } from './firstmatrix.entity';
import { FirstmatrixRepository } from './firstmatrix.repository';
import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';

import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';

@Injectable()
export class FirstmatrixService {
  constructor( 
    @InjectRepository(Firstmatrix)
    private firstmatrixRepository: FirstmatrixRepository,
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(Order)
    private orderRepository: OrderRepository,

  ) {}

  findAll(): Promise<Firstmatrix[]> {
    return this.firstmatrixRepository.find({
      relations: ['affiliate', 'order'],
    });
  }

  async findOne(id: number): Promise<Firstmatrix> {
    const x = this.firstmatrixRepository.findOne({
      where: {
        id : id,
      },
      relations: ['affiliate', 'order']
    });
    return x;
  }

   async findByDate(createdAt: Date): Promise<Firstmatrix[]> {
    return await this.firstmatrixRepository.find({
      where: {
         createdAt,
      },
    });
  }

  async create(_firstmatrix: CreateFirstmatrixDto): Promise<Firstmatrix> {
    const firstmatrix = new Firstmatrix();
    firstmatrix.commission_fee = _firstmatrix.commission_fee;
    firstmatrix.comment = _firstmatrix.comment;

    if(_firstmatrix.affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: _firstmatrix.affiliate_id},
      });
      firstmatrix.affiliate = [affiliate];
    }
    if(_firstmatrix.order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: _firstmatrix.order_id},
      });
      firstmatrix.order = [order];
    }
  
    return this.firstmatrixRepository.save(firstmatrix);
  }

  async update(
    id: number,
    updateFirstmatrixDto: UpdateFirstmatrixDto,
  ): Promise<Firstmatrix> {
    const firstmatrix = await this.findOne(id);
    
    const { commission_fee, comment, affiliate_id, order_id } = updateFirstmatrixDto;
    firstmatrix.commission_fee = commission_fee;
    firstmatrix.comment = comment;

    if(affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: affiliate_id },
      });
      firstmatrix.affiliate = [affiliate];
    }
    if(order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: order_id },
      });
      firstmatrix.order = [order];
    }
    return await firstmatrix.save();
  }

  async remove(id: number): Promise<void> {
    await this.firstmatrixRepository.delete(id);
  }
}
