import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
  } from 'typeorm';
  import { User } from '../user/user.entity';
  import { Products } from '../products/products.entity';

  @Entity({ name: 'order' })
  export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => User, (user) => user.order, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];

    @ManyToMany(() => Products, (products) => products.order, { onDelete: 'CASCADE' })
    @JoinTable()
    products: Products[];

    @Column()
    status: string;

    @Column()
    date: Date;

    @Column()
    item_subtotal: number;

    @Column()
    item_qty: number;

    @Column()
    discount: number;

    @Column()
    shipping: string

    @Column()
    shipping_fee: number;

    @Column()
    isPaid: boolean;

    @Column()
    payment_method: string;

    @Column()
    tracking: string;

    @CreateDateColumn()
    createdAt: Date;
}
