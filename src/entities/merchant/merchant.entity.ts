import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
    ManyToMany,
    JoinTable,
  } from 'typeorm';
import { Order } from '../order/order.entity';
import { Products } from '../products/products.entity';

@Entity({ name: 'merchant' })
  export class Merchant extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Order, (order) => order.merchant, { onDelete: 'CASCADE' })
    order: Order[];

    @ManyToMany(() => Products, (products) => products.merchant, { onDelete: 'CASCADE' })
    @JoinTable()
    products: Products[];

    @Column()
    username: string;
    
    @Column()
    password: string;

    @Column()
    first_name: string;

    @Column()
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    birthdate: Date;

    @Column()
    phone: string;

    @Column()
    address: string;

    @Column()
    country: string;

    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    zipcode: string;

    @Column()
    points: number;

    @CreateDateColumn()
    createdAt: Date;

    
  }


