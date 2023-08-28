/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { merchantSchema } from './merchant.model';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Merchant', schema: merchantSchema},
    ]
  )],
  controllers: [MerchantController],
  providers: [MerchantService],
})
export class MerchantModule {}