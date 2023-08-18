/* eslint-disable prettier/prettier */
import { IsInt, IsDate, } from '@nestjs/class-validator';

export class CreateOrderDto {
  @IsInt()
  id: number;
  
  @IsInt()
  products_id: number;

  @IsInt()
  merchant_id: number;

  @IsInt()
  patron_id: number;

  @IsDate()
  createdAt: Date;
}
