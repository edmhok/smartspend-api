/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from 'src/authentication/auth.module';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { User } from './entities/user/user.entity';
import { UserModule } from './entities/user/user.module';
import { Products } from './entities/products/products.entity';
import { ProductsModule } from './entities/products/products.module';
import { Order } from './entities/order/order.entity';
import { OrderModule } from './entities/order/order.module';
import { Affiliate } from './entities/affiliate/affiliate.entity';
import { AffiliateModule } from './entities/affiliate/affiliate.module';
import { FirstmatrixModule } from './entities/firstmatrix/firstmatrix.module';
import { Firstmatrix } from './entities/firstmatrix/firstmatrix.entity';
import { Secondmatrix } from './entities/secondmatrix/secondmatrix.entity';
import { SecondmatrixModule } from './entities/secondmatrix/secondmatrix.module';


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
        Order,
        Affiliate,
        Firstmatrix,
        Secondmatrix,

      ],
      synchronize: true,
      autoLoadEntities: true,
    }),
    AuthModule,
    UserModule,
    ProductsModule,
    OrderModule,
    AffiliateModule,
    FirstmatrixModule, 
    SecondmatrixModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
