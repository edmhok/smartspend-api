/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Store } from './store.entity';

@Injectable()
@EntityRepository(Store)
export class StoreRepository extends Repository<Store> {
  
}