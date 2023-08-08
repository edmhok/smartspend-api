import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Products } from './products.entity';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductsRepository } from './products.repository';
import { User } from '../user/user.entity';
import { UserService } from '../user/user.service';
import { UserRepository } from '../user/user.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      Products,
      ProductsRepository,
      User,
      UserRepository,
    ]),
  ],
  controllers: [ProductsController],
  providers: [ProductsService, UserService ]
})
export class ProductsModule {}
