/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/authentication/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user/user.entity';
import { Products } from './entities/products/products.entity';
import { Merchant } from './entities/merchant/merchant.entity';
import { Transaction } from './entities/transaction/transaction.entity';
import { Patron } from './entities/patron/patron.entity';
import { MerchantModule } from './entities/merchant/merchant.module';
import { PatronModule } from './entities/patron/patron.module';
import { TransactionModule } from './entities/transaction/transaction.module';
import { ProductsModule } from './entities/products/products.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DATABASE_HOST,
      port: 3306,
      username: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME, 
      entities: [
        User,
        Products,
        Merchant,
        Patron,
        Transaction,
        Products
      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    MerchantModule,
    PatronModule,
    TransactionModule,
    ProductsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
