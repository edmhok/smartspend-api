import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Products } from '../products/products.entity';
import { Unilevel } from '../unilevel/unilevel.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
export declare class Order extends BaseEntity {
    id: number;
    unilevel: Unilevel[];
    firstmatrix: Firstmatrix[];
    secondmatrix: Secondmatrix[];
    products: Products[];
    user: User[];
    affiliate: Affiliate[];
    status: string;
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
