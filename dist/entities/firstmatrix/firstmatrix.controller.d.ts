import { FirstmatrixService } from './firstmatrix.service';
import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';
import { UserService } from '../user/user.service';
import { AffiliateService } from '../affiliate/affiliate.service';
export declare class FirstmatrixController {
    private firstmatrixService;
    private readonly affiliateService;
    private readonly userService;
    constructor(firstmatrixService: FirstmatrixService, affiliateService: AffiliateService, userService: UserService);
    findAll(): Promise<import("./firstmatrix.entity").Firstmatrix[]>;
    findOne(id: number): Promise<import("./firstmatrix.entity").Firstmatrix>;
    findByDate(date: Date): Promise<import("./firstmatrix.entity").Firstmatrix[]>;
    create(createFirstmatrixDto: CreateFirstmatrixDto): Promise<import("./firstmatrix.entity").Firstmatrix>;
    update(id: number, updateFirstmatrixDto: UpdateFirstmatrixDto): string;
    remove(id: number): string;
}
