import { SecondmatrixService } from './secondmatrix.service';
import { CreateSecondmatrixDto } from './dto/create-secondmatrix.dto';
import { UpdateSecondmatrixDto } from './dto/update-secondmatrix.dto';
import { FirstmatrixService } from '../firstmatrix/firstmatrix.service';
import { UserService } from '../user/user.service';
import { AffiliateService } from '../affiliate/affiliate.service';
export declare class SecondmatrixController {
    private secondmatrixService;
    private readonly firstmatrixService;
    private readonly affiliateService;
    private readonly userService;
    constructor(secondmatrixService: SecondmatrixService, firstmatrixService: FirstmatrixService, affiliateService: AffiliateService, userService: UserService);
    findAll(): Promise<import("./secondmatrix.entity").Secondmatrix[]>;
    findOne(id: number): Promise<import("./secondmatrix.entity").Secondmatrix>;
    findByDate(date: Date): Promise<import("./secondmatrix.entity").Secondmatrix[]>;
    create(createSecondmatrixDto: CreateSecondmatrixDto): Promise<import("./secondmatrix.entity").Secondmatrix>;
    update(id: number, updateSecondmatrixDto: UpdateSecondmatrixDto): string;
    remove(id: number): string;
}
