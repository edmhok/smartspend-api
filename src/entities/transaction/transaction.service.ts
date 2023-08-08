/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Transaction } from './transaction.entity';
import { TransactionRepository } from './transaction.repository';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { UpdateTransactionDto } from './dto/update-transaction.dto';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(Transaction) 
    private transactionRepository: TransactionRepository,
   
  ) {}

  findAll(): Promise<Transaction[]> {
    return this.transactionRepository.find({});
  }

  async findOne(id: number): Promise<Transaction> {
    const x = this.transactionRepository.findOne({
      where: {
        id: id,
      }
    });
    return x;
  }

  async create(_transaction: CreateTransactionDto): Promise<Transaction> {
    const transaction = new Transaction();
    transaction.role = _transaction.role;
    transaction.transactionname = _transaction.transactionname;
    transaction.password = _transaction.password;
    transaction.membership = _transaction.membership;
    transaction.first_name = _transaction.first_name;
    transaction.middle_name = _transaction.middle_name;
    transaction.last_name = _transaction.last_name;
    transaction.birthdate = _transaction.birthdate;
    transaction.phone = _transaction.phone;
    transaction.address = _transaction.address;
    transaction.city = _transaction.city;
    transaction.state = _transaction.state;
    transaction.country = _transaction.country;
    transaction.zipcode = _transaction.zipcode;
    
    
    // if(_transaction.products_id) {
    //   const products = await this.productsRepository.findOne({
    //     where: { id: _transaction.products_id },
    //   });
    //   transaction.products = [products];
    // }

    return this.transactionRepository.save(transaction);
  }  

  async update(id: number, updateTransactionDto: UpdateTransactionDto): Promise<Transaction> {
    const transaction = await this.findOne(id);
   
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

  async remove(id: number): Promise<void> {
    await this.transactionRepository.delete(id);
  }
}