import { Products } from './products.entity';
import { ProductsRepository } from './products.repository';
import { CreateProductsDto } from './dto/create-products.dto';
import { UpdateProductsDto } from './dto/update-products.dto';
import { UserRepository } from '../user/user.repository';
import { StoreRepository } from '../store/store.repository';
export declare class ProductsService {
    private productsRepository;
    private userRepository;
    private storeRepository;
    constructor(productsRepository: ProductsRepository, userRepository: UserRepository, storeRepository: StoreRepository);
    findAll(): Promise<Products[]>;
    findOne(id: number): Promise<Products>;
    findByDate(createdAt: Date): Promise<Products[]>;
    create(_products: CreateProductsDto): Promise<Products>;
    update(id: number, updateProductsDto: UpdateProductsDto): Promise<Products>;
    remove(id: number): Promise<void>;
}
