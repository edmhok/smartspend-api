import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductsService } from '../products/products.service';
import { OrderService } from '../order/order.service';
import { AffiliateService } from '../affiliate/affiliate.service';
import { StoreService } from '../store/store.service';
export declare class UserController {
    private userService;
    private readonly affiliateService;
    private readonly productsService;
    private readonly orderService;
    private readonly storeService;
    constructor(userService: UserService, affiliateService: AffiliateService, productsService: ProductsService, orderService: OrderService, storeService: StoreService);
    fillAll(): Promise<import("./user.entity").User[]>;
    getProfile(req: any): Promise<import("./user.entity").User>;
    findOne(id: number): Promise<import("./user.entity").User>;
    create(createUserDto: CreateUserDto): Promise<import("./user.entity").User>;
    update(id: string, updateUserDto: UpdateUserDto): Promise<import("./user.entity").User>;
    remove(id: string): Promise<void>;
}
