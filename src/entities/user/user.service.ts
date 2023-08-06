/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';
import { Affiliate } from '../affiliate/affiliate.entity';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { StoreRepository } from '../store/store.repository';
import { Store } from '../store/store.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) 
    private userRepository: UserRepository,
    @InjectRepository(Products) 
    private productsRepository: ProductsRepository,
    @InjectRepository(Order) 
    private orderRepository: OrderRepository,
    @InjectRepository(Affiliate) 
    private affiliateRepository: AffiliateRepository, 
    @InjectRepository(Store) 
    private storeRepository: StoreRepository, 
   
  ) {}

  findAll(): Promise<User[]> {
    return this.userRepository.find({
      relations: ['products', 'order', 'affiliate', 'store']
    });
  }

  userCredential(query: object | any): Promise<User> {
    const x = this.userRepository.findOne({
      where: query,
      relations: ['products', 'order', 'affiliate', 'store'],
    });
    return x;
  }

  async findOne(id: number): Promise<User> {
    const x = this.userRepository.findOne({
      where: {
        id: id,
      },
      relations: ['products', 'order', 'affiliate', 'store']
    });
    return x;
  }

  async create(_user: CreateUserDto): Promise<User> {
    const user = new User();
    user.role = _user.role;
    user.username = _user.username;
    user.password = _user.password;
    user.membership = _user.membership;
    user.first_name = _user.first_name;
    user.middle_name = _user.middle_name;
    user.last_name = _user.last_name;
    user.birthdate = _user.birthdate;
    user.phone = _user.phone;
    user.address = _user.address;
    user.city = _user.city;
    user.state = _user.state;
    user.country = _user.country;
    user.zipcode = _user.zipcode;
    
    if(_user.affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: _user.affiliate_id },
      });
      user.affiliate = [affiliate];
    }
    if(_user.store_id) {
      const store = await this.storeRepository.findOne({
        where: { id: _user.store_id },
      });
      user.store = [store];
    }
    if(_user.order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: _user.order_id },
      });
      user.order = [order];
    }
    if(_user.products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: _user.products_id },
      });
      user.products = [products];
    }

    return this.userRepository.save(user);
  }  

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
   
    const { 
      role,
      username, 
      password, 
      membership,
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
     } = updateUserDto;
    user.role = role;
    user.username = username;
    user.password = password;
    user.membership = membership;
    user.first_name = first_name;
    user.middle_name = middle_name;
    user.last_name = last_name;
    user.birthdate = birthdate;
    user.phone = phone;
    user.address = address;
    user.city = city;
    user.state = state;
    user.country = country;
    user.zipcode = zipcode;

    if(affiliate_id) {
      const affiliate = await this.affiliateRepository.findOne({
        where: { id: affiliate_id },
      });
      user.affiliate = [affiliate];
    }
    if(store_id) {
      const store = await this.storeRepository.findOne({
        where: { id: store_id },
      });
      user.store = [store];
    }
    if(order_id) {
      const order = await this.orderRepository.findOne({
        where: { id: order_id },
      });
      user.order = [order];
    }
    if(products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: products_id },
      });
      user.products = [products];
    }
    return await user.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}