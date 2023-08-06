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
    ManyToOne,
  } from 'typeorm';
import { User } from '../user/user.entity';
import { Products } from '../products/products.entity';

  @Entity({ name: 'store' })
  export class Store extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => User, (user) => user.store, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];

    @ManyToOne(() => Products, (products) => products.store, { onDelete: 'CASCADE' })
    @JoinColumn()
    products: Products[];

    @Column()
    name: string;
  
    @Column()
    status: string;

    @CreateDateColumn()
    createdAt: Date;
}