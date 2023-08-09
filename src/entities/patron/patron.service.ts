/* eslint-disable prettier/prettier */
import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Patron } from './patron.entity';
import { PatronRepository } from './patron.repository';
import { CreatePatronDto } from './dto/create-patron.dto';
import { UpdatePatronDto } from './dto/update-patron.dto';
import * as bcrypt from 'bcrypt';


@Injectable()
export class PatronService {
  constructor(
    @InjectRepository(Patron) 
    private patronRepository: PatronRepository,
   
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

  credential(query: object | any): Promise<Patron> {
    const x = this.patronRepository.findOne({
      where: query,
    });
    return x;
  }

  findAll(): Promise<Patron[]> {
    return this.patronRepository.find({});
  }

  async findOne(id: number): Promise<Patron> {
    const x = this.patronRepository.findOne({
      where: {
        id: id,
      }
    });
    return x;
  }

  async create(_patron: CreatePatronDto): Promise<Patron> {
    const patron = new Patron();
    patron.role = _patron.role;
    patron.email = _patron.email;
    patron.password = await bcrypt.hash(_patron.password, 10);
    patron.membership = _patron.membership;
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
    
    
    // if(_patron.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _patron.products_id },
    //   });
    //   patron.products = [products];
    // }

    return this.patronRepository.save(patron);
  }  

  async update(id: number, updatePatronDto: UpdatePatronDto): Promise<Patron> {
    const patron = await this.findOne(id);
   
    const { 
      role,
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
      products_id, 
      order_id, 
      affiliate_id,
      store_id,
     } = updatePatronDto;
    patron.role = role;
    patron.email = email;
    patron.password = password;
    patron.membership = membership;
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

    // if(products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: products_id },
    //   });
    //   patron.products = [products];
    // }
    return await patron.save();
    
  }

  async remove(id: number): Promise<void> {
    await this.patronRepository.delete(id);
  }
}