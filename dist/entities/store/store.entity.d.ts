import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Products } from '../products/products.entity';
export declare class Store extends BaseEntity {
    id: number;
    user: User[];
    products: Products[];
    name: string;
    status: string;
    createdAt: Date;
}
