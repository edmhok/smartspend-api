import { Module } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderController } from './order.controller';
import { ProductsService } from '../products/products.service';
import { PatronService } from '../patron/patron.service';
import { MerchantService } from '../merchant/merchant.service';
import { MongooseModule } from '@nestjs/mongoose';
import { merchantSchema } from '../merchant/merchant.model';
import { patronSchema } from '../patron/patron.model';
import { productsSchema } from '../products/products.model';
import { orderSchema } from './order.model';
import { S3Service } from 'src/utils/S3Service';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Order', schema: orderSchema},
      {name: 'Products', schema: productsSchema},
      {name: 'Patron', schema: patronSchema},
      {name: 'Merchant', schema: merchantSchema},
    ]
  )],
  controllers: [OrderController],
  providers: [OrderService, ProductsService, PatronService, MerchantService, S3Service]
})
export class OrderModule {}