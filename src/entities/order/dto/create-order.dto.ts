/* eslint-disable prettier/prettier */
import { IsInt, IsDate, IsBoolean, IsString, } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class CreateOrderDto {
  @IsInt()
  id: ObjectId;
  
  @IsInt()
  products_id: ObjectId;

  @IsInt()
  merchant_id: ObjectId;

  @IsInt()
  patron_id: ObjectId;

  @IsInt()
  qty: number;

  @IsString()
  isPaid: string;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;
}
