/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateProductsDto } from './create-products.dto';

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
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
