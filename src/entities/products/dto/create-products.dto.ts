/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from "@nestjs/class-validator";

export class CreateProductsDto {
  @IsInt()
  id: number;

  @IsInt()
  order_id: number;

  @IsInt()
  products_id: number;
  
  @IsDate()
  entryDate: Date;

  @IsInt()
  productName: string;

  @IsString()
  brand: string;

  @IsInt()
  description: string;

  @IsString()
  sku: string;

  @IsInt()
  price: string;

  @IsInt()
  qty: number;

  @IsString()
  points: number;

  @IsInt()
  originalPrice: number;

  @IsInt()
  discount: number;

  @IsDate()
  createdAt: Date;
}
