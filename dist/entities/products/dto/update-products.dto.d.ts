import { CreateProductsDto } from './create-products.dto';
declare const UpdateProductsDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateProductsDto>>;
export declare class UpdateProductsDto extends UpdateProductsDto_base {
    id: number;
    title: string;
    price: string;
    description: string;
    points: number;
    sku: string;
    qty: number;
    createdAt: Date;
}
export {};
