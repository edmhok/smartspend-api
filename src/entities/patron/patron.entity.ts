import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
    OneToMany,
  } from 'typeorm';
import { Order } from '../order/order.entity';

@Entity({ name: 'patron' })
  export class Patron extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => Order, (order) => order.patron, { onDelete: 'CASCADE' })
    order: Order[];

    @Column()
    email: string;
    
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

    @CreateDateColumn()
    createdAt: Date;


  }


