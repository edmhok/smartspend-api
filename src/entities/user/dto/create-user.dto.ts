/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class CreateUserDto {
    @IsInt()
    id: number;

    @IsOptional()
    affiliate_id: number;

    @IsInt()
    store_id: number;

    @IsOptional()
    products_id: number;

    @IsOptional()
    order_id: number;

    @IsString()
    email: string;
    
    @IsString()
    password: string;

    @IsOptional()
    membership: string;

    @IsOptional()
    first_name: string;

    @IsOptional()
    middle_name: string;

    @IsOptional()
    last_name: string;

    @IsOptional()
    birthdate: Date;

    @IsOptional()
    phone: number;

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

    @IsDate()
    createdAt: Date;
}