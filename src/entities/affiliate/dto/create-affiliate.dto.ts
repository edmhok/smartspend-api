/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateAffiliateDto {
  @IsInt()
  id: number;
  
  @IsInt()
  firstmatrix_id: number;

  @IsInt()
  secondmatrix_id: number;

  @IsInt()
  user_id: number;
 
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