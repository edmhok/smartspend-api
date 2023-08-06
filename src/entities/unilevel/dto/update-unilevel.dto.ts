/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateUnilevelDto } from './create-unilevel.dto';

export class UpdateUnilevelDto extends PartialType(CreateUnilevelDto){
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