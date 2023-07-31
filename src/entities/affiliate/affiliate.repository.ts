/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Affiliate } from './affiliate.entity';

@Injectable()
@EntityRepository(Affiliate)
export class AffiliateRepository extends Repository<Affiliate> {
  
}