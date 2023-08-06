import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
    JoinColumn,
    OneToMany,
    ManyToOne,
  } from 'typeorm';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Order } from '../order/order.entity';

  @Entity({ name: 'firstmatrix' })
  export class Firstmatrix extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Order, (order) => order.firstmatrix, { onDelete: 'CASCADE' })
    @JoinColumn()
    order: Order[];
  
    @ManyToOne(() => Affiliate, (affiliate) => affiliate.firstmatrix, { onDelete: 'CASCADE' })
    @JoinColumn()
    affiliate: Affiliate[];
  
    @Column()
    comment: string;

    @Column()
    commission_fee: number;

    @CreateDateColumn()
    createdAt: Date;
}