/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateUnilevelDto {
  @IsInt()
  id: number;

  @IsInt()
  affiliate_id: number;

  @IsInt()
  order_id: number;

  @IsInt()
  commission_fee: number;

  @IsString()
  comment: string;
  
  @IsDate()
  createdAt: Date;
}