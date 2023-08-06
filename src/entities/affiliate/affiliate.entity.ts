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
import { User } from '../user/user.entity';
import { Unilevel } from '../unilevel/unilevel.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { Order } from '../order/order.entity';

  @Entity({ name: 'affiliate' })
  export class Affiliate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @OneToMany(() => Unilevel, (unilevel) => unilevel.affiliate, { onDelete: 'CASCADE' })
    unilevel: Unilevel[];

    @OneToMany(() => Firstmatrix, (firstmatrix) => firstmatrix.affiliate, { onDelete: 'CASCADE' })
    firstmatrix: Firstmatrix[];

    @OneToMany(() => Secondmatrix, (secondmatrix) => secondmatrix.affiliate, { onDelete: 'CASCADE' })
    secondmatrix: Secondmatrix[];

    @OneToMany(() => Order, (order) => order.affiliate, { onDelete: 'CASCADE' })
    order: Order[];

    @ManyToMany(() => User, (user) => user.affiliate, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;
}