/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Affiliate } from './affiliate.entity';
import { AffiliateRepository } from './affiliate.repository';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';

@Injectable()
export class AffiliateService {
  constructor( 
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,

  ) {}

  findAll(): Promise<Affiliate[]> {
    return this.affiliateRepository.find({
      relations: ['user'],
    });
  }

  async findOne(id: number): Promise<Affiliate> {
    const x = this.affiliateRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user']
    });
    return x;
  }

   async findByDate(enrolled_date: Date): Promise<Affiliate[]> {
    return await this.affiliateRepository.find({
      where: {
        enrolled_date,
      },
    });
  }

  async create(_affiliate: CreateAffiliateDto): Promise<Affiliate> {
    const affiliate = new Affiliate();
    affiliate.enrolled_date = _affiliate.enrolled_date;
    affiliate.link = _affiliate.link;
    affiliate.comment = _affiliate.comment;

    if(_affiliate.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _affiliate.user_id},
      });
      affiliate.user = [user];
    }
    return this.affiliateRepository.save(affiliate);
  }

  async update(
    id: number,
    updateAffiliateDto: UpdateAffiliateDto,
  ): Promise<Affiliate> {
    const affiliate = await this.findOne(id);
    
    const { enrolled_date, link, comment, user_id } = updateAffiliateDto;
    affiliate.enrolled_date = enrolled_date;
    affiliate.link = link;
    affiliate.comment = comment;

    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      affiliate.user = [user];
    }
    return await affiliate.save();
  }

  async remove(id: number): Promise<void> {
    await this.affiliateRepository.delete(id);
  }
}
