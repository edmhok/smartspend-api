import { BaseEntity } from 'typeorm';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Order } from '../order/order.entity';
export declare class Firstmatrix extends BaseEntity {
    id: number;
    order: Order[];
    affiliate: Affiliate[];
    comment: string;
    commission_fee: number;
    createdAt: Date;
}
