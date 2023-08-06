import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
    OneToMany,
  } from 'typeorm';
import { User } from '../user/user.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Unilevel } from '../unilevel/unilevel.entity';
import { Order } from '../order/order.entity';

  @Entity({ name: 'secondmatrix' })
  export class Secondmatrix extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToMany(() => Order, (order) => order.secondmatrix, { onDelete: 'CASCADE' })
    order: Order[];
  
    @OneToMany(() => Affiliate, (affiliate) => affiliate.secondmatrix, { onDelete: 'CASCADE' })
    affiliate: Affiliate[];

    @Column()
    level: number;

    @Column()
    commission_fee: number;
  
    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;
}