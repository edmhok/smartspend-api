/* eslint-disable prettier/prettier */
import { EntityRepository, Repository } from 'typeorm';
import { Transaction } from './transaction.entity';
import { Injectable } from '@nestjs/common';

@Injectable()
@EntityRepository(Transaction)
export class TransactionRepository extends Repository<Transaction> {}