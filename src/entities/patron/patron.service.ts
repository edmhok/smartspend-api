/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patron } from './patron.entity';
import { PatronRepository } from './patron.repository';
import { CreatePatronDto } from './dto/create-patron.dto';
import { UpdatePatronDto } from './dto/update-patron.dto';
import * as bcrypt from 'bcrypt';
import { Order } from '../order/order.entity';
import { OrderRepository } from '../order/order.repository';


@Injectable()
export class PatronService {
  constructor(
    @InjectRepository(Patron) 
    private patronRepository: PatronRepository,
    // @InjectRepository(Order) 
    // private orderRepository: OrderRepository,
   
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

  credential(query: object | any): Promise<Patron> {
    const x = this.patronRepository.findOne({
      where: query,
    });
    return x;
  }

  findAll(): Promise<Patron[]> {
    return this.patronRepository.find({
      // relations: ['order']
    });
  }

  async findOne(id: number): Promise<Patron> {
    const x = this.patronRepository.findOne({
      where: {
        id: id,
      },
      // relations: ['order']
    });
    return x;
  }

  async create(_patron: CreatePatronDto): Promise<Patron> {
    const patron = new Patron();
    patron.username = _patron.username;
    patron.password = await bcrypt.hash(_patron.password, 10);
    patron.first_name = _patron.first_name;
    patron.middle_name = _patron.middle_name;
    patron.last_name = _patron.last_name;
    patron.birthdate = _patron.birthdate;
    patron.phone = _patron.phone;
    patron.address = _patron.address;
    patron.city = _patron.city;
    patron.state = _patron.state;
    patron.country = _patron.country;
    patron.zipcode = _patron.zipcode;
    patron.points = _patron.points;
    
    
    // if(_patron.order_id) {
    //   const order = await this.orderRepository.findOne({
    //     where: { id: _patron.order_id },
    //   });
    //   patron.order = [order];
    // }

    return this.patronRepository.save(patron);
  }  

  async update(id: number, updatePatronDto: UpdatePatronDto): Promise<Patron> {
    const patron = await this.findOne(id);
   
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
    return await patron.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.patronRepository.delete(id);
  }
}