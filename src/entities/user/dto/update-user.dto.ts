/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDto } from './create-user.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class UpdateUserDto extends PartialType(CreateUserDto) {
    @IsInt()
    id: ObjectId;

    // @IsInt()
    // affiliate_id: ObjectId;

    // @IsInt()
    // store_id: ObjectId;
    
    // @IsInt()
    // products_id: ObjectId;

    @IsInt()
    order_id: ObjectId;

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

    @IsDate()
    createdAt: Date;
}