import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';
import { StoreService } from '../store/store.service';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products,
      ProductsRepository,
      User,
      UserRepository,
      Order,
      OrderRepository,
      Store,
      StoreRepository,
      Affiliate,
      AffiliateRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, UserService, StoreService ]
})
export class ProductsModule {}
