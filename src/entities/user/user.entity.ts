import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinColumn,
    ManyToMany,
    JoinTable,
    BaseEntity,
    ManyToOne,
    OneToMany,
  } from 'typeorm';
import { Products } from '../products/products.entity';
import { Store } from '../store/store.entity';
import { Order } from '../order/order.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { IsPhoneNumber } from '@nestjs/class-validator';

@Entity({ name: 'user' })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Affiliate, (affiliate) => affiliate.user, { onDelete: 'CASCADE' })
    affiliate: Affiliate[];

    @ManyToOne(() => Products, (products) => products.user, { onDelete: 'CASCADE' })
    @JoinColumn()
    products: Products[];

    @ManyToOne(() => Order, (order) => order.user, { onDelete: 'CASCADE' })
    @JoinColumn()
    order: Order[];

    @ManyToMany(() => Store, (store) => store.user, { onDelete: 'CASCADE' })
    store: Store[];

    @Column()
    role: string;

    @Column()
    username: string;
    
    @Column()
    password: string;

    @Column()
    membership: string;

    @Column()
    first_name: string;

    @Column()
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    birthdate: Date;

    @Column()
    @IsPhoneNumber()
    phone: number;

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


