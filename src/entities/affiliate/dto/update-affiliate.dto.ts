/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateAffiliateDto } from './create-affiliate.dto';

export class UpdateAffiliateDto extends PartialType(CreateAffiliateDto) {
  @IsInt()
  id: number;
  
  @IsInt()
  user_id: number;
  
  @IsInt()
  firstmatrix_id: number;

  @IsInt()
  secondmatrix_id: number;

  @IsString()
  status: string;

  @IsDate()
  enrolled_date: Date;

  @IsOptional()
  link: string;

  @IsString()
  comment: string;

  @IsDate()
  createdAt: Date;
}