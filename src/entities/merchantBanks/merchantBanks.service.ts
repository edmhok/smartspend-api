/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateMerchantBanksDto } from './dto/create-merchantBanks.dto';
import { UpdateMerchantBanksDto } from './dto/update-merchantBanks.dto';
import * as bcrypt from 'bcrypt';
import { IMerchantBanks } from './merchantBanks.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { IMerchant } from '../merchant/merchant.model';
import { Utils } from 'src/utils/utils';

@Injectable()
export class MerchantBanksService {
  constructor(
    @InjectModel('MerchantBanks')
    private readonly merchantBanksModel: Model<IMerchantBanks>,
    @InjectModel('Merchant')
    private readonly merchantModel: Model<IMerchant>,
    private readonly utils: Utils
  ) {}


  findAll(): Promise<IMerchantBanks[]> {
    return this.merchantBanksModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IMerchantBanks> {
    return this.merchantBanksModel.findById({_id: id}).lean();
  }

  async create(_merchantBanks: CreateMerchantBanksDto): Promise<IMerchantBanks> {

    
    const merchantBank = new this.merchantBanksModel({
      type: _merchantBanks.type,
      name: _merchantBanks.name,
      number: _merchantBanks.number,
      photo: _merchantBanks.photo || '',
      merchantId: _merchantBanks.merchantId || ''
    });
    const ret = await merchantBank.save();

    // Add bank reference to merchants
    const merchant = await this.merchantModel.findOne({_id: _merchantBanks.merchantId}).exec()
    merchant.banks = await this.utils.pushWhenNew(merchant.banks, merchantBank);
    await merchant.save()

    return ret;
  }  

  async update(id: ObjectId, updateMerchantBanksDto: UpdateMerchantBanksDto): Promise<IMerchantBanks> {
    const merchantBanks = await this.merchantBanksModel.findById(id).exec();

    merchantBanks.type = updateMerchantBanksDto.type || merchantBanks.type;
    merchantBanks.name = updateMerchantBanksDto.name || merchantBanks.name;
    merchantBanks.number = updateMerchantBanksDto.number || merchantBanks.number;
    
    return merchantBanks.save();
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.merchantBanksModel.findByIdAndDelete({_id: id}).exec();
    return `Deleted ${result} record`;
  }

  async clear(mid: ObjectId): Promise<string| void> {
    const result = await this.merchantBanksModel.deleteMany({merchantId: mid}).exec();
    return `Deleted ${result.deletedCount} record`;
  }
}