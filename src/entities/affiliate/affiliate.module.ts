import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Affiliate } from './affiliate.entity';
import { AffiliateService } from './affiliate.service';
import { AffiliateController } from './affiliate.controller';
import { AffiliateRepository } from './affiliate.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { ProductsService } from '../products/products.service';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Affiliate,
      AffiliateRepository,
      User,
      UserRepository,
      Products,
      ProductsRepository,
      Order,
      OrderRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository,
    ]),
  ],
  controllers: [AffiliateController],
  providers: [AffiliateService, UserService, OrderService, ProductsService, FirstmatrixService, SecondmatrixService]
})
export class AffiliateModule {}