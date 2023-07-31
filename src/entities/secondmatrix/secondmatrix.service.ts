/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Secondmatrix } from './secondmatrix.entity';
import { SecondmatrixRepository } from './secondmatrix.repository';
import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';

import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';

@Injectable()
export class SecondmatrixService {
  constructor( 
    @InjectRepository(Secondmatrix)
    private secondmatrixRepository: SecondmatrixRepository,
    @InjectRepository(Firstmatrix)
    private firstmatrixRepository: FirstmatrixRepository,
    @InjectRepository(Affiliate)
    private affiliateRepository: AffiliateRepository,
    @InjectRepository(User)
    private userRepository: UserRepository,

  ) {}

  findAll(): Promise<Secondmatrix[]> {
    return this.secondmatrixRepository.find({
      relations: ['user','affiliate','firstmatrix'],
    });
  }

  async findOne(id: number): Promise<Secondmatrix> {
    const x = this.secondmatrixRepository.findOne({
      where: {
        id : id,
      },
      relations: ['user','affiliate', 'firstmatrix']
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
    secondmatrix.comment = _secondmatrix.comment;

    if(_secondmatrix.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _secondmatrix.user_id},
      });
      secondmatrix.user = [user];
    }
    if(_secondmatrix.affiliate_id) {
        const affiliate = await this.affiliateRepository.findOne({
          where: { id: _secondmatrix.affiliate_id},
        });
        secondmatrix.affiliate = [affiliate];
      }
      if(_secondmatrix.firstmatrix_id) {
        const firstmatrix = await this.firstmatrixRepository.findOne({
          where: { id: _secondmatrix.firstmatrix_id},
        });
        secondmatrix.firstmatrix = [firstmatrix];
      }
    return this.secondmatrixRepository.save(secondmatrix);
  }

  async update(
    id: number,
    updateSecondmatrixDto: UpdateSecondmatrixDto,
  ): Promise<Secondmatrix> {
    const secondmatrix = await this.findOne(id);
    
    const { comment, user_id, affiliate_id, firstmatrix_id } = updateSecondmatrixDto;
    secondmatrix.comment = comment;

    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      secondmatrix.user = [user];
    }
    if(affiliate_id) {
        const affiliate = await this.affiliateRepository.findOne({
          where: { id: affiliate_id },
        });
        secondmatrix.affiliate = [affiliate];
      }
      if(firstmatrix_id) {
        const firstmatrix = await this.firstmatrixRepository.findOne({
          where: { id: firstmatrix_id },
        });
        secondmatrix.firstmatrix = [firstmatrix];
      }
    return await secondmatrix.save();
  }

  async remove(id: number): Promise<void> {
    await this.secondmatrixRepository.delete(id);
  }
}
