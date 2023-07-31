import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Products } from '../products/products.entity';
export declare class Order extends BaseEntity {
    id: number;
    user: User[];
    products: Products[];
    status: string;
    date: Date;
    item_subtotal: number;
    item_qty: number;
    discount: number;
    shipping: string;
    shipping_fee: number;
    isPaid: boolean;
    payment_method: string;
    tracking: string;
    createdAt: Date;
}
