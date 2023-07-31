/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Firstmatrix } from './firstmatrix.entity';
import { FirstmatrixRepository } from './firstmatrix.repository';
import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';

@Injectable()
export class FirstmatrixService {
  constructor( 
    @InjectRepository(Firstmatrix)
    private firstmatrixRepository: FirstmatrixRepository,
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,

  ) {}

  findAll(): Promise<Firstmatrix[]> {
    return this.firstmatrixRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Firstmatrix> {
    const x = this.firstmatrixRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user']
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
    firstmatrix.comment = _firstmatrix.comment;

    if(_firstmatrix.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _firstmatrix.user_id},
      });
      firstmatrix.user = [user];
    }
    if(_firstmatrix.affiliate_id) {
        const affiliate = await this.affiliateRepository.findOne({
          where: { id: _firstmatrix.affiliate_id},
        });
        firstmatrix.affiliate = [affiliate];
      }
    return this.firstmatrixRepository.save(firstmatrix);
  }

  async update(
    id: number,
    updateFirstmatrixDto: UpdateFirstmatrixDto,
  ): Promise<Firstmatrix> {
    const firstmatrix = await this.findOne(id);
    
    const { comment, user_id, affiliate_id } = updateFirstmatrixDto;
    firstmatrix.comment = comment;

    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      firstmatrix.user = [user];
    }
    if(affiliate_id) {
        const affiliate = await this.affiliateRepository.findOne({
          where: { id: affiliate_id },
        });
        firstmatrix.affiliate = [affiliate];
      }
    return await firstmatrix.save();
  }

  async remove(id: number): Promise<void> {
    await this.firstmatrixRepository.delete(id);
  }
}
