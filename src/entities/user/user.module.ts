/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { UserRepository } from './user.repository';

import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { ProductsService } from '../products/products.service';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateService } from '../affiliate/affiliate.service';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ 
      User,
      UserRepository,
      Products,
      ProductsRepository,
      Order,
      OrderRepository,
      Affiliate,
      AffiliateRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, ProductsService, OrderService, AffiliateService, FirstmatrixService, SecondmatrixService ],
})
export class UserModule {}