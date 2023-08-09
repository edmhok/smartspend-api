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
  entryDate: string;

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
