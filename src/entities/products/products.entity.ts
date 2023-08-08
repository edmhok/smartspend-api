import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    BaseEntity,
  } from 'typeorm';

  @Entity({ name: 'products' })
  export class Products extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: string;

    @Column()
    description: string;

    @Column()
    points: number;

    @Column()
    sku: string;

    @Column()
    qty: number;

    @CreateDateColumn()
    createdAt: Date;
  }