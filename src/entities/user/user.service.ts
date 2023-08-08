/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) 
    private userRepository: UserRepository,
   
  ) {}

  userCredential(query: object | any): Promise<User> {
    const x = this.userRepository.findOne({
      where: query,
    });
    return x;
  }

  findAll(): Promise<User[]> {
    return this.userRepository.find({});
  }

  async findOne(id: number): Promise<User> {
    const x = this.userRepository.findOne({
      where: {
        id: id,
      }
    });
    return x;
  }

  async create(_user: CreateUserDto): Promise<User> {
    const user = new User();
    user.email = _user.email;
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
    
    
    // if(_user.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _user.products_id },
    //   });
    //   user.products = [products];
    // }

    return this.userRepository.save(user);
  }  

  async update(id: number, updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.findOne(id);
   
    const { 
      email, 
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
     } = updateUserDto;
    user.email = email;
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

    // if(products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: products_id },
    //   });
    //   user.products = [products];
    // }
    return await user.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.userRepository.delete(id);
  }
}