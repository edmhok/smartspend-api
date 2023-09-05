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
      points: _patron.points || 0,
      photos: _patron.photos || ''
    });

    return patron.save();
  }  

  async update(id: ObjectId, updatePatronDto: UpdatePatronDto): Promise<IPatron> {
    const patron = await this.patronModel.findById(id).exec();
   
    patron.username = updatePatronDto.username || patron.username;
    patron.password = updatePatronDto.password || patron.password;
    patron.first_name = updatePatronDto.first_name || patron.first_name;
    patron.middle_name = updatePatronDto.middle_name || patron.middle_name;
    patron.last_name = updatePatronDto.last_name || patron.last_name;
    patron.birthdate = updatePatronDto.birthdate || patron.birthdate;
    patron.phone = updatePatronDto.phone || patron.phone;
    patron.address = updatePatronDto.address || patron.address;
    patron.city = updatePatronDto.city || patron.city;
    patron.state = updatePatronDto.state || patron.state;
    patron.country = updatePatronDto.country || patron.country;
    patron.zipcode = updatePatronDto.zipcode || patron.zipcode;
    patron.points = updatePatronDto.points || patron.points;

    return patron.save();
    
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.patronModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
  }
}