import { BaseEntity } from 'typeorm';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Order } from '../order/order.entity';
export declare class Unilevel extends BaseEntity {
    id: number;
    order: Order[];
    affiliate: Affiliate[];
    commission_fee: number;
    comment: string;
    createdAt: Date;
}
