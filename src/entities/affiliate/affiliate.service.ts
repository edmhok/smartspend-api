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
      relations: ['user']
    });
  }

  async findOne(id: number): Promise<Affiliate> {
    const getOnebyId = this.affiliateRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user']
    });
    return getOnebyId;
  }

  async create(_affiliate: CreateAffiliateDto): Promise<Affiliate> {
    const affiliate = new Affiliate();
    affiliate.name = _affiliate.name;

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
    
    const { name, user_id} = updateAffiliateDto;
    affiliate.name = name;

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
