/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { StoreService } from './store.service';
import { StoreController } from './store.controller';
import { StoreRepository } from './store.repository';

import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { ProductsService } from '../products/products.service';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { UserService } from '../user/user.service';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([ 
      Store,
      StoreRepository,
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
  controllers: [StoreController],
  providers: [StoreService, UserService, ProductsService],
})
export class StoreModule {}