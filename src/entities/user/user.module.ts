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
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';
import { StoreService } from '../store/store.service';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { Unilevel } from '../unilevel/unilevel.entity';
import { UnilevelRepository } from '../unilevel/unilevel.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';

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
      Store,
      StoreRepository,
      Unilevel,
      UnilevelRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository,
    ]),
  ],
  controllers: [UserController],
  providers: [UserService, AffiliateService, StoreService, ProductsService, OrderService],
})
export class UserModule {}