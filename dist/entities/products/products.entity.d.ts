import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Order } from '../order/order.entity';
export declare class Products extends BaseEntity {
    id: number;
    user: User[];
    order: Order[];
    title: string;
    type: string;
    sku: string;
    stock_status: string;
    stock_at_warehouse: string;
    reserved: string;
    selling_price: number;
    old_price: number;
    purchase_price: number;
    manufacturer: string;
    commodity_group: string;
    category: string;
    product_title: string;
    variant_title: string;
    product_description: string;
    image_url: string;
    url_key: string;
    item_id: number;
    createdAt: Date;
}
