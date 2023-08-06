/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Store } from './store.entity';
import { StoreRepository } from './store.repository';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { Products } from '../products/products.entity';
import { ProductsRepository } from '../products/products.repository';
import { UserRepository } from '../user/user.repository';
import { User } from '../user/user.entity';

@Injectable()
export class StoreService {
  constructor(
    @InjectRepository(Store) 
    private storeRepository: StoreRepository,
    @InjectRepository(User) 
    private userRepository: UserRepository,
    @InjectRepository(Products) 
    private productsRepository: ProductsRepository,
  ) {}

  findAll(): Promise<Store[]> {
    return this.storeRepository.find({
      relations: ['products', 'user']
    });
  }

  async findOne(id: number): Promise<Store> {
    const x = this.storeRepository.findOne({
      where: {
        id: id,
      },
      relations: ['products', 'user']
    });
    return x;
  }

  async create(_store: CreateStoreDto): Promise<Store> {
    const store = new Store();
    store.name = _store.name;
    store.status = _store.status;

    if(_store.products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: _store.products_id},
      });
      store.products = [products];
    }
    if(_store.user_id) {
      const user = await this.userRepository.findOne({
        where: { id: _store.user_id },
      });
      store.user = [user];
    }

    return this.storeRepository.save(store);
  }  

  async update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store> {
    const store = await this.findOne(id);
   
    const { name, status, products_id, user_id } = updateStoreDto;
    store.name = name;
    store.status = status;

    if(products_id) {
      const products = await this.productsRepository.findOne({
        where: { id: products_id },
      });
      store.products = [products];
    }
    if(user_id) {
      const user = await this.userRepository.findOne({
        where: { id: user_id },
      });
      store.user = [user];
    }
    return await store.save();
  }

  async remove(id: number): Promise<void> {
    await this.storeRepository.delete(id);
  }
}