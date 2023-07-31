import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';
import { Products } from '../products/products.entity';
import { ProductsService } from '../products/products.service';
import { ProductsRepository } from '../products/products.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { AffiliateService } from '../affiliate/affiliate.service';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { SecondmatrixService } from '../secondmatrix/secondmatrix.service';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { SecondmatrixRepository } from '../secondmatrix/secondmatrix.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderRepository,
      User,
      UserRepository,
      Products,
      ProductsRepository,
      Affiliate,
      AffiliateRepository,
      Firstmatrix,
      FirstmatrixRepository,
      Secondmatrix,
      SecondmatrixRepository,
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, UserService, ProductsService, AffiliateService, FirstmatrixService, SecondmatrixService]
})
export class OrderModule {}
