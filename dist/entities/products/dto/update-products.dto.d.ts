import { CreateProductsDto } from './create-products.dto';
declare const UpdateProductsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductsDto>>;
export declare class UpdateProductsDto extends UpdateProductsDto_base {
    id: number;
    user_id: number;
    order_id: number;
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
export {};
