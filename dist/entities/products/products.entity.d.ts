import { BaseEntity } from 'typeorm';
export declare class Products extends BaseEntity {
    id: number;
    title: string;
    price: string;
    description: string;
    points: number;
    sku: string;
    qty: number;
    createdAt: Date;
}
