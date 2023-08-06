import { Order } from './order.entity';
import { OrderRepository } from './order.repository';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { UserRepository } from '../user/user.repository';
import { ProductsRepository } from '../products/products.repository';
export declare class OrderService {
    private orderRepository;
    private userRepository;
    private productsRepository;
    constructor(orderRepository: OrderRepository, userRepository: UserRepository, productsRepository: ProductsRepository);
    findAll(): Promise<Order[]>;
    findOne(id: number): Promise<Order>;
    findByDate(createdAt: Date): Promise<Order[]>;
    create(_order: CreateOrderDto): Promise<Order>;
    update(id: number, updateOrderDto: UpdateOrderDto): Promise<Order>;
    remove(id: number): Promise<void>;
}
