/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional, IsArray } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class CreatePatronDto {
    @IsInt()
    id: ObjectId;

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

    @IsInt()
    points: number;

    @IsDate()
    createdAt: Date;

    @IsString()
    photos: string;
}