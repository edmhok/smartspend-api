import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  BaseEntity,
} from "typeorm";

@Entity({ name: "products" })
export class Products extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

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
  price: number;

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
