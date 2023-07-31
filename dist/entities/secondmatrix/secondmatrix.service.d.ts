import { Secondmatrix } from './secondmatrix.entity';
import { SecondmatrixRepository } from './secondmatrix.repository';
import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';
import { UserRepository } from '../user/user.repository';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
import { FirstmatrixRepository } from '../firstmatrix/firstmatrix.repository';
export declare class SecondmatrixService {
    private secondmatrixRepository;
    private firstmatrixRepository;
    private affiliateRepository;
    private userRepository;
    constructor(secondmatrixRepository: SecondmatrixRepository, firstmatrixRepository: FirstmatrixRepository, affiliateRepository: AffiliateRepository, userRepository: UserRepository);
    findAll(): Promise<Secondmatrix[]>;
    findOne(id: number): Promise<Secondmatrix>;
    findByDate(createdAt: Date): Promise<Secondmatrix[]>;
    create(_secondmatrix: CreateSecondmatrixDto): Promise<Secondmatrix>;
    update(id: number, updateSecondmatrixDto: UpdateSecondmatrixDto): Promise<Secondmatrix>;
    remove(id: number): Promise<void>;
}
