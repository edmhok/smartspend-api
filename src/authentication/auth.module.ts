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
import { MerchantStrategy } from './strategy/merchant.strategy';
import { MerchantService } from 'src/entities/merchant/merchant.service';
import { Merchant } from 'src/entities/merchant/merchant.entity';
import { Patron } from 'src/entities/patron/patron.entity';
import { PatronStrategy } from './strategy/patron.strategy';
import { PatronService } from 'src/entities/patron/patron.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Merchant, Patron]),
    User,
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '24h' },
    }),
  ],
  providers: [UserService, AuthService, LocalStrategy, JwtStrategy, MerchantStrategy, MerchantService, PatronStrategy, PatronService],
  controllers: [AuthController],
  exports: [UserService, AuthService, ],
})
export class AuthModule {}
