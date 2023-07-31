/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsInt()
    id: number;

    @IsInt()
    firstmatrix_id: number;

    @IsInt()
    secondmatrix_id: number;
    
    @IsInt()
    affiliate_id: number;
    
    @IsInt()
    products_id: number;

    @IsInt()
    order_id: number;

    @IsString()
    username: string;
    
    @IsString()
    password: string;

    @IsString()
    membership: string;

    @IsInt()
    commission_fee: number;

    @IsString()
    first_name: string;

    @IsString()
    middle_name: string;

    @IsString()
    last_name: string;

    @IsDate()
    birthdate: Date;

    @IsInt()
    phone: number;

    @IsString()
    address: string;

    @IsOptional()
    country: string;

    @IsString()
    city: string;

    @IsString()
    state: string;

    @IsString()
    zipcode: string;

    @IsDate()
    createdAt: Date;
}