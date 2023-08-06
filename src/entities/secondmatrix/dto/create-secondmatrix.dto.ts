/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateSecondmatrixDto {
  @IsInt()
  id: number;

  @IsInt()
  order_id: number;

  @IsInt()
  affiliate_id: number;

  @IsInt()
  level: number;

  @IsInt()
  commission_fee: number;

  @IsString()
  comment: string;

  @IsDate()
  createdAt: Date;

}