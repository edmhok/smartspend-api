import { Firstmatrix } from './firstmatrix.entity';
import { FirstmatrixRepository } from './firstmatrix.repository';
import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';
import { UserRepository } from '../user/user.repository';
import { AffiliateRepository } from '../affiliate/affiliate.repository';
export declare class FirstmatrixService {
    private firstmatrixRepository;
    private affiliateRepository;
    private userRepository;
    constructor(firstmatrixRepository: FirstmatrixRepository, affiliateRepository: AffiliateRepository, userRepository: UserRepository);
    findAll(): Promise<Firstmatrix[]>;
    findOne(id: number): Promise<Firstmatrix>;
    findByDate(createdAt: Date): Promise<Firstmatrix[]>;
    create(_firstmatrix: CreateFirstmatrixDto): Promise<Firstmatrix>;
    update(id: number, updateFirstmatrixDto: UpdateFirstmatrixDto): Promise<Firstmatrix>;
    remove(id: number): Promise<void>;
}
