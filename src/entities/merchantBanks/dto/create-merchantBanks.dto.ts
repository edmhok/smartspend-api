/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional, IsArray } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class CreateMerchantBanksDto {
    @IsString()
    type: String
    
    @IsString()
    name: String
    
    @IsString()
    number: String
    
    @IsString()
    photo: String

    @IsString()
    merchantId: String
}
