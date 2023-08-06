/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secondmatrix } from './secondmatrix.entity';
import { SecondmatrixRepository } from './secondmatrix.repository';
import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';

import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';

@Injectable()
export class SecondmatrixService {
  constructor( 
    @InjectRepository(Secondmatrix)
    private secondmatrixRepository: SecondmatrixRepository,
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
  ) {}

  findAll(): Promise<Secondmatrix[]> {
    return this.secondmatrixRepository.find({
      relations: ['affiliate', 'order'],
    });
  }

  async findOne(id: number): Promise<Secondmatrix> {
    const x = this.secondmatrixRepository.findOne({
      where: {
        id : id,
      },
      relations: ['affiliate', 'order']
    });
    return x;
  }

   async findByDate(createdAt: Date): Promise<Secondmatrix[]> {
    return await this.secondmatrixRepository.find({
      where: {
         createdAt,
      },
    });
  }

  async create(_secondmatrix: CreateSecondmatrixDto): Promise<Secondmatrix> {
    const secondmatrix = new Secondmatrix();
    secondmatrix.level = _secondmatrix.level;
    secondmatrix.commission_fee = _secondmatrix.commission_fee;
    secondmatrix.comment = _secondmatrix.comment;

    if(_secondmatrix.affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: _secondmatrix.affiliate_id},
      });
      secondmatrix.affiliate = [affiliate];
    }
    if(_secondmatrix.order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: _secondmatrix.order_id},
      });
      secondmatrix.order = [order];
    }
   
    return this.secondmatrixRepository.save(secondmatrix);
  }

  async update(
    id: number,
    updateSecondmatrixDto: UpdateSecondmatrixDto,
  ): Promise<Secondmatrix> {
    const secondmatrix = await this.findOne(id);
    
    const { level, commission_fee, comment, affiliate_id, order_id } = updateSecondmatrixDto;
    secondmatrix.level = level;
    secondmatrix.commission_fee = commission_fee;
    secondmatrix.comment = comment;

    if(affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: affiliate_id },
      });
      secondmatrix.affiliate = [affiliate];
    }
    if(order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: order_id },
      });
      secondmatrix.order = [order];
    }
    return await secondmatrix.save();
  }

  async remove(id: number): Promise<void> {
    await this.secondmatrixRepository.delete(id);
  }
}
