import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Unilevel } from './unilevel.entity';
import { UnilevelRepository } from './unilevel.repository';
import { UnilevelService } from './unilevel.service';
import { UnilevelController } from './unilevel.controller';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { UserService } from '../user/user.service';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';
import { OrderRepository } from '../order/order.repository';
import { Order } from '../order/order.entity';
import { ProductsRepository } from '../products/products.repository';
import { Products } from '../products/products.entity';
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';
import { OrderService } from '../order/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Unilevel,
      UnilevelRepository,
      Firstmatrix,
      FirstmatrixRepository,
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
  controllers: [UnilevelController],
  providers: [UnilevelService, OrderService, AffiliateService ]
})
export class UnilevelModule {}
