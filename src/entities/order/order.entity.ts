import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
    ManyToOne,
    JoinColumn,
    OneToMany,
  } from 'typeorm';
import { User } from '../user/user.entity';
import { Products } from '../products/products.entity';
import { Unilevel } from '../unilevel/unilevel.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { Affiliate } from '../affiliate/affiliate.entity';

  @Entity({ name: 'order' })
  export class Order extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToOne(() => Unilevel, (unilevel) => unilevel.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    unilevel: Unilevel[];

    @ManyToOne(() => Firstmatrix, (firstmatrix) => firstmatrix.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    firstmatrix: Firstmatrix[];

    @ManyToOne(() => Secondmatrix, (secondmatrix) => secondmatrix.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    secondmatrix: Secondmatrix[];

    @ManyToOne(() => Products, (products) => products.order, { onDelete: 'CASCADE' })
    @JoinColumn()
    products: Products[];

    @OneToMany(() => User, (user) => user.order, { onDelete: 'CASCADE' })
    user: User[];

    @ManyToOne(() => Affiliate, (affiliate) => affiliate.order, { onDelete: 'CASCADE' })
    affiliate: Affiliate[];

    @Column()
    status: string;

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
