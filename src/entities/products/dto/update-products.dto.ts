/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from "@nestjs/class-validator";
import { PartialType } from "@nestjs/mapped-types";
import { CreateProductsDto } from "./create-products.dto";

export class UpdateProductsDto extends PartialType(CreateProductsDto) {
  @IsInt()
  id: number;

  @IsString()
  entryDate: string;

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

  @IsString()
  originalPrice: number;

  @IsInt()
  discount: number;

  @IsDate()
  createdAt: Date;
}
