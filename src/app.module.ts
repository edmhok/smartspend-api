/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/authentication/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MerchantModule } from './entities/merchant/merchant.module';
import { PatronModule } from './entities/patron/patron.module';
import { TransactionModule } from './entities/transaction/transaction.module';
import { ProductsModule } from './entities/products/products.module';
import { OrderModule } from './entities/order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { MerchantBanksModule } from './entities/merchantBanks/merchantBanks.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING),
    AuthModule,
    MerchantModule,
    // MerchantBanksModule,
    PatronModule,
    TransactionModule,
    ProductsModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
