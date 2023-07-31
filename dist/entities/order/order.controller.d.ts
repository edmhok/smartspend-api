import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserService } from '../user/user.service';
import { ProductsService } from '../products/products.service';
export declare class OrderController {
    private orderService;
    private readonly userService;
    private readonly productsService;
    constructor(orderService: OrderService, userService: UserService, productsService: ProductsService);
    findAll(): Promise<import("./order.entity").Order[]>;
    findOne(id: number): Promise<import("./order.entity").Order>;
    findByDate(date: Date): Promise<import("./order.entity").Order[]>;
    create(createOrderDto: CreateOrderDto): Promise<import("./order.entity").Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): string;
    remove(id: number): string;
}
