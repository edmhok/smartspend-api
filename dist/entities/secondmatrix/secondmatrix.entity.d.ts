import { BaseEntity } from 'typeorm';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Order } from '../order/order.entity';
export declare class Secondmatrix extends BaseEntity {
    id: number;
    order: Order[];
    affiliate: Affiliate[];
    level: number;
    commission_fee: number;
    comment: string;
    createdAt: Date;
}
