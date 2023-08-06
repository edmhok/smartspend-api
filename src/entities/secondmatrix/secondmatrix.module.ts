import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secondmatrix } from './secondmatrix.entity';
import { SecondmatrixRepository } from './secondmatrix.repository';
import { SecondmatrixService } from './secondmatrix.service';
import { SecondmatrixController } from './secondmatrix.controller';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { UserService } from '../user/user.service';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { Unilevel } from '../unilevel/unilevel.entity';
import { UnilevelRepository } from '../unilevel/unilevel.repository';
import { UnilevelService } from '../unilevel/unilevel.service';
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { OrderRepository } from '../order/order.repository';
import { Order } from '../order/order.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Secondmatrix,
      SecondmatrixRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Unilevel,
      UnilevelRepository,
      User,
      UserRepository,
      Store,
      StoreRepository,
      Affiliate,
      AffiliateRepository,
      Products,
      ProductsRepository,
      Order,
      OrderRepository
    ]),
  ],
  controllers: [SecondmatrixController],
  providers: [SecondmatrixService, UserService]
})
export class SecondmatrixModule {}
