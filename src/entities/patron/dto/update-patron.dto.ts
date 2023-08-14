/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreatePatronDto } from './create-patron.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';

export class UpdatePatronDto extends PartialType(CreatePatronDto) {
    @IsInt()
    id: number;

    @IsInt()
    order_id: number;

    @IsString()
    role: string;

    @IsString()
    email: string;
    
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

    @IsDate()
    createdAt: Date;
}