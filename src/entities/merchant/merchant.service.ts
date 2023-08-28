/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import * as bcrypt from 'bcrypt';
import { IMerchant } from './merchant.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';

@Injectable()
export class MerchantService {
  constructor(
    @InjectModel('Merchant')
    private readonly merchantModel: Model<IMerchant>,
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    const user = await this.credential({ username: username });
    if (!user) return null;
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!user) {
      throw new NotAcceptableException('could not find the user');
    }
    if (user && passwordValid) {
      return user;
    }
    return null;
  }

  async credential(query: object | any): Promise<IMerchant> {
    const x = await this.merchantModel.findOne(query);
    return x;
  }

  findAll(): Promise<IMerchant[]> {
    return this.merchantModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IMerchant> {
    return this.merchantModel.findById({_id: id}).lean();
  }

  async create(_merchant: CreateMerchantDto): Promise<IMerchant> {
    const passwordHashed = await bcrypt.hash(_merchant.password, 10);
    const merchant = new this.merchantModel({
      username: _merchant.username,
      password: passwordHashed,
      first_name: _merchant.first_name,
      middle_name: _merchant.middle_name,
      last_name: _merchant.last_name,
      birthdate: _merchant.birthdate,
      phone: _merchant.phone,
      address: _merchant.address,
      city: _merchant.city,
      state: _merchant.state,
      country: _merchant.country,
      zipcode: _merchant.zipcode,
      points: _merchant.points,
    });

    return merchant.save();
    
  }  

  async update(id: ObjectId, updateMerchantDto: UpdateMerchantDto): Promise<IMerchant> {
    const merchant = await this.merchantModel.findById(id).exec();

    const { 
      username, 
      password, 
      first_name, 
      middle_name, 
      last_name, 
      birthdate, 
      phone, 
      address, 
      city, 
      state, 
      country, 
      zipcode,
      points, 
    } = updateMerchantDto;

    merchant.username = username;
    merchant.password = password;
    merchant.first_name = first_name;
    merchant.middle_name = middle_name;
    merchant.last_name = last_name;
    merchant.birthdate = birthdate;
    merchant.phone = phone;
    merchant.address = address;
    merchant.city = city;
    merchant.state = state;
    merchant.country = country;
    merchant.zipcode = zipcode;
    merchant.points = points;

    return merchant.save();
    
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.merchantModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}