/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Merchant } from './merchant.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Merchant)
export class MerchantRepository extends Repository<Merchant> {}