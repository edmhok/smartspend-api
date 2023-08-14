import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Order } from './order.entity';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { OrderRepository } from './order.repository';
import { ProductsRepository } from '../products/products.repository';
import { Products } from '../products/products.entity';
import { Patron } from '../patron/patron.entity';
import { PatronRepository } from '../patron/patron.repository';
import { MerchantRepository } from '../merchant/merchant.repository';
import { Merchant } from '../merchant/merchant.entity';
import { ProductsService } from '../products/products.service';
import { PatronService } from '../patron/patron.service';
import { MerchantService } from '../merchant/merchant.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Order,
      OrderRepository,
      Products,
      ProductsRepository,
      Patron,
      PatronRepository,
      Merchant,
      MerchantRepository
    ]),
  ],
  controllers: [OrderController],
  providers: [OrderService, ProductsService, PatronService, MerchantService]
})
export class OrderModule {}