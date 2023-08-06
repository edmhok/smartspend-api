import { User } from './user.entity';
import { UserRepository } from './user.repository';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ProductsRepository } from '../products/products.repository';
import { OrderRepository } from '../order/order.repository';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { StoreRepository } from '../store/store.repository';
export declare class UserService {
    private userRepository;
    private productsRepository;
    private orderRepository;
    private affiliateRepository;
    private storeRepository;
    constructor(userRepository: UserRepository, productsRepository: ProductsRepository, orderRepository: OrderRepository, affiliateRepository: AffiliateRepository, storeRepository: StoreRepository);
    findAll(): Promise<User[]>;
    userCredential(query: object | any): Promise<User>;
    findOne(id: number): Promise<User>;
    create(_user: CreateUserDto): Promise<User>;
    update(id: number, updateUserDto: UpdateUserDto): Promise<User>;
    remove(id: number): Promise<void>;
}
