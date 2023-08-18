/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateMerchantDto {
    @IsInt()
    id: number;

    @IsInt()
    order_id: number;

    @IsInt()
    product_id: number;

    @IsString()
    username: string;
    
    @IsString()
    password: string;

    @IsOptional()
    first_name: string;

    @IsOptional()
    middle_name: string;

    @IsOptional()
    last_name: string;

    @IsOptional()
    birthdate: Date;

    @IsString()
    phone: string;

    @IsOptional()
    address: string;

    @IsOptional()
    country: string;

    @IsOptional()
    city: string;

    @IsOptional()
    state: string;

    @IsOptional()
    zipcode: string;

    @IsInt()
    points: number;

    @IsDate()
    createdAt: Date;
}