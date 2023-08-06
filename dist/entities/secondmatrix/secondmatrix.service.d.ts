import { Secondmatrix } from './secondmatrix.entity';
import { SecondmatrixRepository } from './secondmatrix.repository';
import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { OrderRepository } from '../order/order.repository';
export declare class SecondmatrixService {
    private secondmatrixRepository;
    private affiliateRepository;
    private orderRepository;
    constructor(secondmatrixRepository: SecondmatrixRepository, affiliateRepository: AffiliateRepository, orderRepository: OrderRepository);
    findAll(): Promise<Secondmatrix[]>;
    findOne(id: number): Promise<Secondmatrix>;
    findByDate(createdAt: Date): Promise<Secondmatrix[]>;
    create(_secondmatrix: CreateSecondmatrixDto): Promise<Secondmatrix>;
    update(id: number, updateSecondmatrixDto: UpdateSecondmatrixDto): Promise<Secondmatrix>;
    remove(id: number): Promise<void>;
}
