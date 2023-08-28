/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateTransactionDto } from './create-transaction.dto';
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class UpdateTransactionDto extends PartialType(CreateTransactionDto) {
    @IsInt()
    id: ObjectId;

    @IsInt()
    affiliate_id: ObjectId;

    @IsInt()
    store_id: ObjectId;
    
    @IsInt()
    products_id: ObjectId;

    @IsInt()
    order_id: ObjectId;

    @IsString()
    role: string;

    @IsString()
    transactionname: string;
    
    @IsString()
    password: string;

    @IsString()
    membership: string;

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