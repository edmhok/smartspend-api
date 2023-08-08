/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateProductsDto {
  @IsInt()
  id: number;
  
  @IsInt()
  title: string;

  @IsInt()
  price: string;

  @IsInt()
  description: string;
  
  @IsString()
  points: number;

  @IsString()
  sku: string;

  @IsInt()
  qty: number;


  @IsDate()
  createdAt: Date;
}
