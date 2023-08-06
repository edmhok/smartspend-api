/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateProductsDto {
  @IsInt()
  id: number;
  
  @IsInt()
  user_id: number;

  @IsInt()
  store_id: number;

  @IsInt()
  order_id: number;
  
  @IsString()
  title: string;

  @IsOptional()
  type: string;

  @IsString()
  sku: string

  @IsOptional()
  stock_status: string;

  @IsOptional()
  stock_at_warehouse: string;

  @IsOptional()
  reserved: string;

  @IsInt()
  selling_price: number;

  @IsInt()
  old_price: number;

  @IsInt()
  purchase_price: number;

  @IsString()
  manufacturer: string;

  @IsString()
  commodity_group: string;

  @IsOptional()
  category: string;
  
  @IsString()
  product_title: string;

  @IsString()
  variant_title: string;

  @IsString()
  product_description: string;

  @IsString()
  image_url: string;

  @IsString()
  url_key: string;

  @IsInt()
  item_id: number;

  @IsDate()
  createdAt: Date;
}
