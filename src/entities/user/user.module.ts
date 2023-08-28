/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { userSchema } from './user.model';
import { MongooseModule } from '@nestjs/mongoose';


@Module({
  imports: [MongooseModule.forFeature(
    [
      {name: 'User', schema: userSchema},
    ]
  )],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}