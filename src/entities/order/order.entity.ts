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
  } from "typeorm";
import { Products } from "../products/products.entity";
import { Patron } from "../patron/patron.entity";
import { Merchant } from "../merchant/merchant.entity";
  
  @Entity({ name: "order" })
  export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => Products, (products) => products.order, { onDelete: 'CASCADE' })
    @JoinTable()
    products: Products[];

    @ManyToOne(() => Patron, (patron) => patron.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    patron: Patron;

    @ManyToOne(() => Merchant, (merchant) => merchant.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    merchant: Merchant;
  
    @CreateDateColumn()
    createdAt: Date;
  }


  