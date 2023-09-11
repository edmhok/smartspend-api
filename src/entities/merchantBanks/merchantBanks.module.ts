/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { merchantBanksSchema } from './merchantBanks.model';
import { MerchantBanksService } from './merchantBanks.service';
import { MerchantBanksController } from './merchantBanks.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { S3Service } from 'src/utils/S3Service';
import { merchantSchema } from '../merchant/merchant.model';
import { Utils } from 'src/utils/utils';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'MerchantBanks', schema: merchantBanksSchema},
      {name: 'Merchant', schema: merchantSchema},
    ]
  )],
  controllers: [MerchantBanksController],
  providers: [MerchantBanksService, S3Service, Utils],
})
export class MerchantBanksModule {}