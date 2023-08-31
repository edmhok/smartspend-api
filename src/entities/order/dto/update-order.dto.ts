import { IsInt, IsDate, IsBoolean, IsString} from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { ObjectId } from 'mongoose';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto){
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

  @IsBoolean()
  isPaid: boolean;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;
}