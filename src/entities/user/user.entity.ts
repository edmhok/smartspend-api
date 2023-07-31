import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    ManyToMany,
    JoinTable,
    BaseEntity,
  } from 'typeorm';
import { Products } from '../products/products.entity';
import { Order } from '../order/order.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
  
@Entity({ name: 'user' })
  export class User extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Firstmatrix, (firstmatrix) => firstmatrix.user, { onDelete: 'CASCADE' })
    firstmatrix: Firstmatrix[];

    @ManyToMany(() => Secondmatrix, (secondmatrix) => secondmatrix.user, { onDelete: 'CASCADE' })
    secondmatrix: Secondmatrix[];

    @ManyToMany(() => Affiliate, (affiliate) => affiliate.user, { onDelete: 'CASCADE' })
    @JoinTable()
    affiliate: Affiliate[];

    @ManyToMany(() => Products, (products) => products.user, { onDelete: 'CASCADE' })
    products: Products[];

    @ManyToMany(() => Order, (order) => order.user, { onDelete: 'CASCADE' })
    order: Order[];

    @Column()
    username: string;
    
    @Column()
    password: string;

    @Column()
    membership: string;

    @Column()
    commission_fee: number;

    @Column()
    first_name: string;

    @Column()
    middle_name: string;

    @Column()
    last_name: string;

    @Column()
    birthdate: Date;

    @Column()
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