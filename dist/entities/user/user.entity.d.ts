import { BaseEntity } from 'typeorm';
import { Products } from '../products/products.entity';
import { Order } from '../order/order.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
export declare class User extends BaseEntity {
    id: number;
    firstmatrix: Firstmatrix[];
    secondmatrix: Secondmatrix[];
    affiliate: Affiliate[];
    products: Products[];
    order: Order[];
    username: string;
    password: string;
    membership: string;
    commission_fee: number;
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
