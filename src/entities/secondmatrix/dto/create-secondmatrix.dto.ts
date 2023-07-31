/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateSecondmatrixDto {
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