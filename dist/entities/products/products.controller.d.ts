import { ProductsService } from './products.service';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { UserService } from '../user/user.service';
import { OrderService } from '../order/order.service';
export declare class ProductsController {
    private productsService;
    private readonly userService;
    private readonly orderService;
    constructor(productsService: ProductsService, userService: UserService, orderService: OrderService);
    findAll(): Promise<import("./products.entity").Products[]>;
    findOne(id: number): Promise<import("./products.entity").Products>;
    findByDate(date: Date): Promise<import("./products.entity").Products[]>;
    create(createProductsDto: CreateProductsDto): Promise<import("./products.entity").Products>;
    update(id: number, updateProductsDto: UpdateProductsDto): string;
    remove(id: number): string;
}
