import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from 'typeorm';
import { IsPhoneNumber } from '@nestjs/class-validator';

@Entity({ name: 'patron' })
  export class Patron extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => Products, (products) => products.patron, { onDelete: 'CASCADE' })
    // @JoinColumn()
    // products: Products[];

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


