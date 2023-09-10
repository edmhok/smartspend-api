/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { merchantSchema } from './merchant.model';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Service } from 'src/utils/S3Service';
import { merchantBanksSchema } from '../merchantBanks/merchantBanks.model';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Merchant', schema: merchantSchema},
      // {name: 'MerchantBanks', schema: merchantBanksSchema},
    ]
  )],
  controllers: [MerchantController],
  providers: [MerchantService, S3Service],
})
export class MerchantModule {}