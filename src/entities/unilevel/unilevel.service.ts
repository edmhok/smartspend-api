/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Unilevel } from './unilevel.entity';
import { UnilevelRepository } from './unilevel.repository';
import { CreateUnilevelDto } from './dto/create-unilevel.dto';
import { UpdateUnilevelDto } from './dto/update-unilevel.dto';

import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';

@Injectable()
export class UnilevelService {
  constructor( 
    @InjectRepository(Unilevel)
    private unilevelRepository: UnilevelRepository,
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(Order)
    private orderRepository: OrderRepository,
  ) {}

  findAll(): Promise<Unilevel[]> {
    return this.unilevelRepository.find({
      relations: ['affiliate', 'order'],
    });
  }

  async findOne(id: number): Promise<Unilevel> {
    const x = this.unilevelRepository.findOne({
      where: {
        id : id,
      },
      relations: ['affiliate', 'order']
    });
    return x;
  }

   async findByDate(createdAt: Date): Promise<Unilevel[]> {
    return await this.unilevelRepository.find({
      where: {
         createdAt,
      },
    });
  }

  async create(_unilevel: CreateUnilevelDto): Promise<Unilevel> {
    const unilevel = new Unilevel();
    unilevel.commission_fee = _unilevel.commission_fee;
    unilevel.comment = _unilevel.comment;

    if(_unilevel.affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: _unilevel.affiliate_id},
      });
      unilevel.affiliate = [affiliate];
    }
    if(_unilevel.order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: _unilevel.order_id},
      });
      unilevel.order = [order];
    }
    
    return this.unilevelRepository.save(unilevel);
  }

  async update(
    id: number,
    updateUnilevelDto: UpdateUnilevelDto,
  ): Promise<Unilevel> {
    const unilevel = await this.findOne(id);
    
    const { commission_fee, comment, affiliate_id, order_id } = updateUnilevelDto;
    unilevel.commission_fee = commission_fee;
    unilevel.comment = comment;

    if(order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: order_id },
      });
      unilevel.order = [order];
    }
    if(affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: affiliate_id },
      });
      unilevel.affiliate = [affiliate];
    }
    
    return await unilevel.save();
  }

  async remove(id: number): Promise<void> {
    await this.unilevelRepository.delete(id);
  }
}
