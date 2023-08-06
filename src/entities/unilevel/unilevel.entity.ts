import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
    OneToMany,
    JoinColumn,
  } from 'typeorm';
import { User } from '../user/user.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Order } from '../order/order.entity';

  @Entity({ name: 'unilevel' })
  export class Unilevel extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToMany(() => Order, (order) => order.unilevel, { onDelete: 'CASCADE' })
    order: Order[];

    @OneToMany(() => Affiliate, (affiliate) => affiliate.unilevel, { onDelete: 'CASCADE' })
    affiliate: Affiliate[];

    @Column()
    commission_fee: number;
  
    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;
}