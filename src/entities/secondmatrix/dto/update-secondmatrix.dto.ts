/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { PartialType } from '@nestjs/mapped-types';
import { CreateSecondmatrixDto } from './create-secondmatrix.dto';

export class UpdateSecondmatrixDto extends PartialType(CreateSecondmatrixDto){
  @IsInt()
  id: number;
  
  @IsInt()
  firstmatrix_id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  affiliate_id: number;

  @IsString()
  comment: string;

  @IsDate()
  createdAt: Date;

}