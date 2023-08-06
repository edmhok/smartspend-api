/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateAffiliateDto {
  @IsInt()
  id: number;
  
  @IsInt()
  user_id: number;
  
  @IsInt()
  unilevel_id: number;

  @IsInt()
  firstmatrix_id: number;

  @IsInt()
  secondmatrix_id: number;

  @IsString()
  name: string;

  @IsDate()
  createdAt: Date;


}