/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserModule } from '../entities/user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './strategy/local.strategy';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategy/jwt.strategy';
import { jwtConstants } from './constants';
import { UserService } from 'src/entities/user/user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/entities/user/user.entity';
import { Products } from 'src/entities/products/products.entity';
import { Order } from 'src/entities/order/order.entity';
import { Affiliate } from 'src/entities/affiliate/affiliate.entity';
import { Firstmatrix } from 'src/entities/firstmatrix/firstmatrix.entity';
import { Secondmatrix } from 'src/entities/secondmatrix/secondmatrix.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Products, Order, Affiliate, Firstmatrix, Secondmatrix ]),
    User,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy],
  controllers: [AuthController],
  exports: [UserService, AuthService],
})
export class AuthModule {}
