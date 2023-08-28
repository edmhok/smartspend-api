/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class CreateUserDto {
    @IsInt()
    id: ObjectId;

    // @IsOptional()
    // affiliate_id: ObjectId;

    // @IsInt()
    // store_id: ObjectId;

    // @IsOptional()
    // products_id: ObjectId;

    @IsOptional()
    order_id: ObjectId;

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

    @IsDate()
    createdAt: Date;
}