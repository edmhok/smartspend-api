import { Affiliate } from './affiliate.entity';
import { AffiliateRepository } from './affiliate.repository';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
import { UserRepository } from '../user/user.repository';
export declare class AffiliateService {
    private affiliateRepository;
    private userRepository;
    constructor(affiliateRepository: AffiliateRepository, userRepository: UserRepository);
    findAll(): Promise<Affiliate[]>;
    findOne(id: number): Promise<Affiliate>;
    findByDate(enrolled_date: Date): Promise<Affiliate[]>;
    create(_affiliate: CreateAffiliateDto): Promise<Affiliate>;
    update(id: number, updateAffiliateDto: UpdateAffiliateDto): Promise<Affiliate>;
    remove(id: number): Promise<void>;
}
