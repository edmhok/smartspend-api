/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Merchant } from './merchant.entity';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';


@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant]),
  ],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}