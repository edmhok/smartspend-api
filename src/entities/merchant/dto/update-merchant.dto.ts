/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchantDto } from './create-merchant.dto';
import { IsString, IsInt, IsDate, IsOptional, IsArray } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class UpdateMerchantDto extends PartialType(CreateMerchantDto) {
    @IsInt()
    id: ObjectId;

    @IsInt()
    order_id: ObjectId;

    @IsInt()
    product_id: ObjectId;

    @IsString()
    username: string;
    
    @IsString()
    password: string;

    @IsString()
    first_name: string;

    @IsString()
    middle_name: string;

    @IsString()
    last_name: string;

    @IsDate()
    birthdate: Date;

    @IsString()
    phone: string;

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

    @IsInt()
    points: number;

    @IsDate()
    createdAt: Date;

    @IsString()
    photos: string;
}