/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { IUser } from './user.model';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<IUser>,
  ) {}

  async userCredential(query: object | any): Promise<IUser> {
    const x = await this.userModel.findOne(query);
    return x;
  }

  findAll(): Promise<IUser[]> {
    return this.userModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IUser> {
    return this.userModel.findById({_id: id}).lean();
  }

  async create(_user: CreateUserDto): Promise<IUser> {
    const user = new this.userModel({
      username: _user.username,
      password: _user.password,
      first_name: _user.first_name,
      middle_name: _user.middle_name,
      last_name: _user.last_name,
      birthdate: _user.birthdate,
      phone: _user.phone,
      address: _user.address,
      city: _user.city,
      state: _user.state,
      country: _user.country,
      zipcode: _user.zipcode,
    })
    
    
    
    // if(_user.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _user.products_id },
    //   });
    //   user.products = [products];
    // }

    return user.save();
  }  

  async update(id: ObjectId, updateUserDto: UpdateUserDto): Promise<IUser> {
    const user = await this.userModel.findById(id).exec();
   
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
     } = updateUserDto;
    user.username = username;
    user.password = password;
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

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.userModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}