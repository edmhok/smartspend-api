/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { TransactionController } from './transaction.controller';
import { transactionSchema } from './transaction.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Transaction', schema: transactionSchema},
    ]
  )],
  controllers: [TransactionController],
  providers: [TransactionService],
})
export class TransactionModule {}