import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Firstmatrix } from './firstmatrix.entity';
import { FirstmatrixRepository } from './firstmatrix.repository';
import { FirstmatrixService } from './firstmatrix.service';
import { FirstmatrixController } from './firstmatrix.controller';
import { User } from '../user/user.entity';
import { UserRepository } from '../user/user.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';
import { UserService } from '../user/user.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { ProductsService } from '../products/products.service';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { OrderService } from '../order/order.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Firstmatrix,
      FirstmatrixRepository,
      User,
      UserRepository,
      Affiliate,
      AffiliateRepository,
      Secondmatrix,
      SecondmatrixRepository,
      Products,
      ProductsRepository,
      Order,
      OrderRepository,

    ]),
  ],
  controllers: [FirstmatrixController],
  providers: [FirstmatrixService, SecondmatrixService, UserService, AffiliateService, ProductsService, OrderService]
})
export class FirstmatrixModule {}
