/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Merchant } from './merchant.entity';
import { MerchantRepository } from './merchant.repository';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant) 
    private merchantRepository: MerchantRepository,

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

  credential(query: object | any): Promise<Merchant> {
    const x = this.merchantRepository.findOne({
      where: query,
    });
    return x;
  }

  findAll(): Promise<Merchant[]> {
    return this.merchantRepository.find({});
  }

  async findOne(id: number): Promise<Merchant> {
    console.log({id})
    const x = await this.merchantRepository.findOne({where: { id: id}});
    console.log({x})
    return x;
  }

  async create(_merchant: CreateMerchantDto): Promise<Merchant> {
    
    const merchant = new Merchant();
    merchant.username = _merchant.username;
    merchant.password = await bcrypt.hash(_merchant.password, 10);
    merchant.first_name = _merchant.first_name;
    merchant.middle_name = _merchant.middle_name;
    merchant.last_name = _merchant.last_name;
    merchant.birthdate = _merchant.birthdate;
    merchant.phone = _merchant.phone;
    merchant.address = _merchant.address;
    merchant.city = _merchant.city;
    merchant.state = _merchant.state;
    merchant.country = _merchant.country;
    merchant.zipcode = _merchant.zipcode;
    merchant.points = _merchant.points;
    
    
    return this.merchantRepository.save(merchant);
  }  

  async update(id: number, updateMerchantDto: UpdateMerchantDto): Promise<Merchant> {
    const merchant = await this.findOne(id);
   
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

    return await merchant.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.merchantRepository.delete(id);
  }
}