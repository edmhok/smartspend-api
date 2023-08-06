import { StoreService } from './store.service';
import { CreateStoreDto } from './dto/create-store.dto';
import { UpdateStoreDto } from './dto/update-store.dto';
import { ProductsService } from '../products/products.service';
import { UserService } from '../user/user.service';
export declare class StoreController {
    private storeService;
    private readonly userService;
    private readonly productsService;
    constructor(storeService: StoreService, userService: UserService, productsService: ProductsService);
    findAll(): Promise<import("./store.entity").Store[]>;
    findOne(id: number): Promise<import("./store.entity").Store>;
    create(createStoreDto: CreateStoreDto): Promise<import("./store.entity").Store>;
    update(id: number, updateStoreDto: UpdateStoreDto): string;
    remove(id: number): string;
}
