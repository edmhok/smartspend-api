/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { CreatePatronDto } from './dto/create-patron.dto';
import { UpdatePatronDto } from './dto/update-patron.dto';
import * as bcrypt from 'bcrypt';
import { IPatron } from './patron.model';
import { Model, ObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';


@Injectable()
export class PatronService {
  constructor(
    @InjectModel('Patron')
    private readonly patronModel: Model<IPatron>,
   
  ) {}

  async validateUser(username: string, password: string): Promise<any> {
    console.log({username, password});
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

  async credential(query: object | any): Promise<IPatron> {
    const x = await this.patronModel.findOne(query);
    return x;
  }

  findAll(): Promise<IPatron[]> {
    return this.patronModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<IPatron> {
    return this.patronModel.findById({_id: id}).lean();
  }

  async create(_patron: CreatePatronDto): Promise<IPatron> {
    const passwordHashed = await bcrypt.hash(_patron.password, 10);
    const patron = new this.patronModel({
      username: _patron.username,
      password: passwordHashed,
      first_name: _patron.first_name,
      middle_name: _patron.middle_name,
      last_name: _patron.last_name,
      birthdate: _patron.birthdate,
      phone: _patron.phone,
      address: _patron.address,
      city: _patron.city,
      state: _patron.state,
      country: _patron.country,
      zipcode: _patron.zipcode,
      points: _patron.points,
    });

    return patron.save();
  }  

  async update(id: ObjectId, updatePatronDto: UpdatePatronDto): Promise<IPatron> {
    const patron = await this.patronModel.findById(id).exec();
   
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
     } = updatePatronDto;
    patron.username = username;
    patron.password = password;
    patron.first_name = first_name;
    patron.middle_name = middle_name;
    patron.last_name = last_name;
    patron.birthdate = birthdate;
    patron.phone = phone;
    patron.address = address;
    patron.city = city;
    patron.state = state;
    patron.country = country;
    patron.zipcode = zipcode;
    patron.points = points;

    // if(order_id) {
    //   const order = await this.orderRepository.findOne({
    //     where: { id: order_id },
    //   });
    //   patron.order = [order];
    // }
    return patron.save();
    
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.patronModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}