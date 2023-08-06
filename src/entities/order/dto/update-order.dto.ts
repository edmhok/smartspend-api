/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateOrderDto } from './create-order.dto';

export class UpdateOrderDto extends PartialType(CreateOrderDto){
  @IsInt()
  id: number;
  
  @IsInt()
  user_id: number;

  @IsInt()
  unilevel_id: number;

  @IsInt()
  firstmatrix_id: number;

  @IsInt()
  secondmatrix_id: number;
 
  @IsInt()
  products_id: number;
  
  @IsString()
  status: string;

  @IsDate()
  date: Date;

  @IsInt()
  item_subtotal: number;

  @IsInt()
  item_qty: number;

  @IsInt()
  discount: number;

  @IsString()
  shipping: string

  @IsInt()
  shipping_fee: number;

  @IsOptional()
  isPaid: boolean;

  @IsString()
  payment_method: string;

  @IsOptional()
  tracking: string;

  @IsDate()
  createdAt: Date;
}