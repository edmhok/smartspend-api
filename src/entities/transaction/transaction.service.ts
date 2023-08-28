/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model, ObjectId } from 'mongoose';
import { ITransaction } from './transaction.model';

@Injectable()
export class TransactionService {
  constructor(
    @InjectModel('Transaction')
    private readonly transactionModel: Model<ITransaction>,
  ) {}

  findAll(): Promise<ITransaction[]> {
    return this.transactionModel.find().lean();
  }

  async findOne(id: ObjectId): Promise<ITransaction> {
    return this.transactionModel.findById({_id: id}).lean();
  }

  async create(_transaction: CreateTransactionDto): Promise<ITransaction> {
    const transaction = new this.transactionModel({
      role: _transaction.role,
      transactionname: _transaction.transactionname,
      password: _transaction.password,
      membership: _transaction.membership,
      first_name: _transaction.first_name,
      middle_name: _transaction.middle_name,
      last_name: _transaction.last_name,
      birthdate: _transaction.birthdate,
      phone: _transaction.phone,
      address: _transaction.address,
      city: _transaction.city,
      state: _transaction.state,
      country: _transaction.country,
      zipcode: _transaction.zipcode,
    });
    
    
    
    // if(_transaction.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _transaction.products_id },
    //   });
    //   transaction.products = [products];
    // }

    return transaction.save();
  }  

  async update(id: ObjectId, updateTransactionDto: UpdateTransactionDto): Promise<ITransaction> {
    const transaction = await this.transactionModel.findById(id).exec();

    const { 
      role,
      transactionname, 
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
     } = updateTransactionDto;
    transaction.role = role;
    transaction.transactionname = transactionname;
    transaction.password = password;
    transaction.membership = membership;
    transaction.first_name = first_name;
    transaction.middle_name = middle_name;
    transaction.last_name = last_name;
    transaction.birthdate = birthdate;
    transaction.phone = phone;
    transaction.address = address;
    transaction.city = city;
    transaction.state = state;
    transaction.country = country;
    transaction.zipcode = zipcode;

    // if(products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: products_id },
    //   });
    //   transaction.products = [products];
    // }
    return await transaction.save();
    
  }

  async remove(id: ObjectId): Promise<string| void> {
    const result = await this.transactionModel.findByIdAndDelete({_id: id}).exec();
    // return `Deleted ${result.deletedCount} record`;
    
  }
}