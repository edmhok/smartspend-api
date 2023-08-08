/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Patron } from './patron.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Patron)
export class PatronRepository extends Repository<Patron> {}