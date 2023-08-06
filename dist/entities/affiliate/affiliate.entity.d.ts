import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Unilevel } from '../unilevel/unilevel.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
import { Order } from '../order/order.entity';
export declare class Affiliate extends BaseEntity {
    id: number;
    unilevel: Unilevel[];
    firstmatrix: Firstmatrix[];
    secondmatrix: Secondmatrix[];
    order: Order[];
    user: User[];
    name: string;
    createdAt: Date;
}
