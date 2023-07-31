/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { Secondmatrix } from './secondmatrix.entity';

@Injectable()
@EntityRepository(Secondmatrix)
export class SecondmatrixRepository extends Repository<Secondmatrix> {
  
}