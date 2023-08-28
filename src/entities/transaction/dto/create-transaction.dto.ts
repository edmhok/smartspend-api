/* eslint-disable prettier/prettier */
import { IsString, IsInt, IsDate, IsOptional } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class CreateTransactionDto {
    @IsInt()
    id: ObjectId;

    @IsOptional()
    affiliate_id: ObjectId;

    @IsInt()
    store_id: ObjectId;

    @IsOptional()
    products_id: ObjectId;

    @IsOptional()
    order_id: ObjectId;

    @IsString()
    role: string;

    @IsString()
    transactionname: string;
    
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