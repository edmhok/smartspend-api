/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Firstmatrix } from './firstmatrix.entity';

@Injectable()
@EntityRepository(Firstmatrix)
export class FirstmatrixRepository extends Repository<Firstmatrix> {
  
}