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

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.credential({ email: email });
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
    const x = this.merchantRepository.findOne({
      where: {
        id: id,
      }
    });
    return x;
  }

  async create(_merchant: CreateMerchantDto): Promise<Merchant> {
    
    const merchant = new Merchant();
    merchant.email = _merchant.email;
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
    
    
    // if(_merchant.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _merchant.products_id },
    //   });
    //   merchant.products = [products];
    // }

    return this.merchantRepository.save(merchant);
  }  

  async update(id: number, updateMerchantDto: UpdateMerchantDto): Promise<Merchant> {
    const merchant = await this.findOne(id);
   
    const { 
      email, 
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
      products_id, 
      order_id, 
      affiliate_id,
      store_id,
     } = updateMerchantDto;
    merchant.email = email;
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

    // if(products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: products_id },
    //   });
    //   merchant.products = [products];
    // }
    return await merchant.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.merchantRepository.delete(id);
  }
}