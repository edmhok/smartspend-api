import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { UserService } from '../user/user.service';
import { MongooseModule } from '@nestjs/mongoose';
import { productsSchema } from './products.model';
import { userSchema } from '../user/user.model';

@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'Products', schema: productsSchema},
      {name: 'User', schema: userSchema}
    ]
  )],
  controllers: [ProductsController],
  providers: [ProductsService, UserService ]
})
export class ProductsModule {}
