/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateFirstmatrixDto {
  @IsInt()
  id: number;
  
  @IsInt()
  secondmatrix_id: number;

  @IsInt()
  user_id: number;

  @IsInt()
  affiliate_id: number;

  @IsString()
  comment: string;

  @IsDate()
  createdAt: Date;

}