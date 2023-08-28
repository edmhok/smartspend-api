/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from "@nestjs/class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { ObjectId } from "mongoose";
import { CreateProductsDto } from "./create-products.dto";

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
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

  @IsDate()
  createdAt: Date;
}
