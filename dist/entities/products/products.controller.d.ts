import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
export declare class ProductsController {
    private productsService;
    constructor(productsService: ProductsService);
    findAll(): Promise<import("./products.entity").Products[]>;
    findOne(id: number): Promise<import("./products.entity").Products>;
    findByDate(date: Date): Promise<import("./products.entity").Products[]>;
    create(createProductsDto: CreateProductsDto): Promise<import("./products.entity").Products>;
    update(id: number, updateProductsDto: UpdateProductsDto): string;
    remove(id: number): string;
}
