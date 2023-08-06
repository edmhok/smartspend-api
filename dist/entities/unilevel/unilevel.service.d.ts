import { Unilevel } from './unilevel.entity';
import { UnilevelRepository } from './unilevel.repository';
import { CreateUnilevelDto } from './dto/create-unilevel.dto';
import { UpdateUnilevelDto } from './dto/update-unilevel.dto';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { OrderRepository } from '../order/order.repository';
export declare class UnilevelService {
    private unilevelRepository;
    private affiliateRepository;
    private orderRepository;
    constructor(unilevelRepository: UnilevelRepository, affiliateRepository: AffiliateRepository, orderRepository: OrderRepository);
    findAll(): Promise<Unilevel[]>;
    findOne(id: number): Promise<Unilevel>;
    findByDate(createdAt: Date): Promise<Unilevel[]>;
    create(_unilevel: CreateUnilevelDto): Promise<Unilevel>;
    update(id: number, updateUnilevelDto: UpdateUnilevelDto): Promise<Unilevel>;
    remove(id: number): Promise<void>;
}
