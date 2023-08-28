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
import { MerchantStrategy } from './strategy/merchant.strategy';
import { MerchantService } from 'src/entities/merchant/merchant.service';
import { PatronStrategy } from './strategy/patron.strategy';
import { PatronService } from 'src/entities/patron/patron.service';
import { MongooseModule } from '@nestjs/mongoose';
import { merchantSchema } from 'src/entities/merchant/merchant.model';
import { orderSchema } from 'src/entities/order/order.model';
import { patronSchema } from 'src/entities/patron/patron.model';
import { userSchema } from 'src/entities/user/user.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      {name: 'User', schema: userSchema},
      {name: 'Merchant', schema: merchantSchema},
      {name: 'Patron', schema: patronSchema},
      {name: 'Order', schema: orderSchema}
    ]),
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
