import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
    OneToMany,
    ManyToOne,
    JoinColumn,
  } from 'typeorm';
  import { User } from '../user/user.entity';
  import { Order } from '../order/order.entity';
import { Store } from '../store/store.entity';

  @Entity({ name: 'products' })
  export class Products extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(() => User, (user) => user.products, { onDelete: 'CASCADE' })
    user: User[];

    @OneToMany(() => Order, (order) => order.products, { onDelete: 'CASCADE' })
    order: Order[];

    @OneToMany(() => Store, (store) => store.products, { onDelete: 'CASCADE' })
    store: Store[];

    @Column()
    title: string;
  
    @Column()
    type: string;
  
    @Column()
    sku: string
  
    @Column()
    stock_status: string;
  
    @Column()
    stock_at_warehouse: string; 
  
    @Column()
    reserved: string;
  
    @Column()
    selling_price: number;
  
    @Column()
    old_price: number;
  
    @Column()
    purchase_price: number;
  
    @Column()
    manufacturer: string;
  
    @Column()
    commodity_group: string;
  
    @Column()
    category: string;
    
    @Column()
    product_title: string;
  
    @Column()
    variant_title: string;
  
    @Column()
    product_description: string;
  
    @Column()
    image_url: string;
  
    @Column()
    url_key: string;
  
    @Column()
    item_id: number;

    @CreateDateColumn()
    createdAt: Date;
  }