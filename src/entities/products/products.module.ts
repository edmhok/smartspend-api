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
import { OrderService } from '../order/order.service';
import { OrderRepository } from '../order/order.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateService } from '../affiliate/affiliate.service';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products,
      ProductsRepository,
      User,
      UserRepository,
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
  controllers: [ProductsController],
  providers: [ProductsService, UserService, OrderService, AffiliateService, FirstmatrixService, SecondmatrixService]
})
export class ProductsModule {}
