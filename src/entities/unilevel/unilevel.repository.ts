/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Unilevel } from './unilevel.entity';

@Injectable()
@EntityRepository(Unilevel)
export class UnilevelRepository extends Repository<Unilevel> {
  
}