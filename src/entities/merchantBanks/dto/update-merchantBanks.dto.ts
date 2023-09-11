/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/mapped-types';
import { CreateMerchantBanksDto } from './create-merchantBanks.dto';
import { IsString, IsInt, IsDate, IsOptional, IsArray, IsJSON } from '@nestjs/class-validator';
import { ObjectId } from 'mongoose';

export class UpdateMerchantBanksDto extends PartialType(CreateMerchantBanksDto) {
    @IsOptional()
    type?: string

    @IsOptional()
    name?: string

    @IsOptional()
    number?: string

    @IsOptional()
    merchantId: String
}