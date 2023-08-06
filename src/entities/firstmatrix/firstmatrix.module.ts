import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firstmatrix } from './firstmatrix.entity';
import { FirstmatrixRepository } from './firstmatrix.repository';
import { FirstmatrixService } from './firstmatrix.service';
import { FirstmatrixController } from './firstmatrix.controller';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { AffiliateService } from '../affiliate/affiliate.service';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';
import { Unilevel } from '../unilevel/unilevel.entity';
import { UnilevelRepository } from '../unilevel/unilevel.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';
import { Store } from '../store/store.entity';
import { StoreRepository } from '../store/store.repository';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Firstmatrix,
      FirstmatrixRepository,
      Unilevel,
      UnilevelRepository,
      Secondmatrix,
      SecondmatrixRepository,
      User,
      UserRepository,
      Affiliate,
      AffiliateRepository,
      Store,
      StoreRepository,
      Order,
      OrderRepository,
      Products,
      ProductsRepository,
    ]),
  ],
  controllers: [FirstmatrixController],
  providers: [FirstmatrixService, OrderService, AffiliateService]
})
export class FirstmatrixModule {}
