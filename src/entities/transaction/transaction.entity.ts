import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from 'typeorm';
import { IsPhoneNumber } from '@nestjs/class-validator';

@Entity({ name: 'transaction' })
  export class Transaction extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    // @ManyToOne(() => Products, (products) => products.transaction, { onDelete: 'CASCADE' })
    // @JoinColumn()
    // products: Products[];

    @Column()
    role: string;

    @Column()
    transactionname: string;
    
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


