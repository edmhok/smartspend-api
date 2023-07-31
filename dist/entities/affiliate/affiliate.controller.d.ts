import { AffiliateService } from './affiliate.service';
import { CreateAffiliateDto } from './dto/create-affiliate.dto';
import { UpdateAffiliateDto } from './dto/update-affiliate.dto';
import { UserService } from '../user/user.service';
export declare class AffiliateController {
    private affiliateService;
    private readonly userService;
    constructor(affiliateService: AffiliateService, userService: UserService);
    findAll(): Promise<import("./affiliate.entity").Affiliate[]>;
    findOne(id: number): Promise<import("./affiliate.entity").Affiliate>;
    findByDate(date: Date): Promise<import("./affiliate.entity").Affiliate[]>;
    create(createAffiliateDto: CreateAffiliateDto): Promise<import("./affiliate.entity").Affiliate>;
    update(id: number, updateAffiliateDto: UpdateAffiliateDto): string;
    remove(id: number): string;
}
