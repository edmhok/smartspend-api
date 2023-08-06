import { Store } from './store.entity';
import { StoreRepository } from './store.repository';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ProductsRepository } from '../products/products.repository';
import { UserRepository } from '../user/user.repository';
export declare class StoreService {
    private storeRepository;
    private userRepository;
    private productsRepository;
    constructor(storeRepository: StoreRepository, userRepository: UserRepository, productsRepository: ProductsRepository);
    findAll(): Promise<Store[]>;
    findOne(id: number): Promise<Store>;
    create(_store: CreateStoreDto): Promise<Store>;
    update(id: number, updateStoreDto: UpdateStoreDto): Promise<Store>;
    remove(id: number): Promise<void>;
}
