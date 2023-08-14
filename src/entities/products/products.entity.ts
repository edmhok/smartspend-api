import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
  ManyToMany,
} from "typeorm";
import { Order } from "../order/order.entity";

@Entity({ name: "products" })
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToMany(() => Order, (order) => order.products, { onDelete: 'CASCADE' })
  order: Order[];

  @Column()
  entryDate: Date;

  @Column()
  productName: string;

  @Column()
  brand: string;

  @Column()
  description: string;

  @Column()
  sku: string;

  @Column()
  price: string;

  @Column()
  qty: number;

  @Column()
  points: number;

  @Column()
  discount: number;

  @Column()
  originalPrice: number;

  @CreateDateColumn()
  createdAt: Date;
}
