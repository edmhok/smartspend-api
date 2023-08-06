import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affiliate } from './affiliate.entity';
import { AffiliateService } from './affiliate.service';
import { AffiliateController } from './affiliate.controller';
import { AffiliateRepository } from './affiliate.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';
import { Unilevel } from '../unilevel/unilevel.entity';
import { UnilevelRepository } from '../unilevel/unilevel.repository';
import { UnilevelService } from '../unilevel/unilevel.service';
import { ProductsRepository } from '../products/products.repository';
import { Products } from '../products/products.entity';
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Affiliate,
      AffiliateRepository,
      User,
      UserRepository,
      Order,
      OrderRepository,
      Unilevel,
      UnilevelRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository,
      Products,
      ProductsRepository,
      Store,
      StoreRepository,
    ]),
  ],
  controllers: [ AffiliateController ],
  providers: [ AffiliateService, UserService]
})
export class AffiliateModule {}