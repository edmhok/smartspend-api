/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateStoreDto } from './create-store.dto';

export class UpdateStoreDto extends PartialType(CreateStoreDto){
  @IsInt()
  id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  products_id: number;

  @IsString()
  name: string;

  @IsString()
  status: string;

  @IsDate()
  createdAt: Date;

}