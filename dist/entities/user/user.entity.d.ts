import { BaseEntity } from 'typeorm';
import { Products } from '../products/products.entity';
import { Store } from '../store/store.entity';
import { Order } from '../order/order.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
export declare class User extends BaseEntity {
    id: number;
    affiliate: Affiliate[];
    products: Products[];
    order: Order[];
    store: Store[];
    role: string;
    username: string;
    password: string;
    membership: string;
    first_name: string;
    middle_name: string;
    last_name: string;
    birthdate: Date;
    phone: number;
    address: string;
    country: string;
    city: string;
    state: string;
    zipcode: string;
    createdAt: Date;
}
