/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from "@nestjs/class-validator";
import { ObjectId } from "mongoose";

export class CreateProductsDto {
  @IsInt()
  id: ObjectId;

  @IsInt()
  order_id: ObjectId;

  @IsInt()
  products_id: ObjectId;
  
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

  @IsString()
  category: string;

  @IsString()
  variant: string;

  @IsString()
  size: string;

  @IsString()
  color: string;

  @IsString()
  tags: string;

  @IsInt()
  price: number;

  @IsInt()
  qty: number;

  @IsString()
  points: number;

  @IsInt()
  originalPrice: number;

  @IsInt()
  discount: number;

  @IsString()
  merchant: string;

  @IsDate()
  createdAt: Date;

  @IsString()
  photo: string;
}
