import { UnilevelService } from './unilevel.service';
import { CreateUnilevelDto } from './dto/create-unilevel.dto';
import { UpdateUnilevelDto } from './dto/update-unilevel.dto';
import { AffiliateService } from '../affiliate/affiliate.service';
import { OrderService } from '../order/order.service';
export declare class UnilevelController {
    private unilevelService;
    private readonly affiliateService;
    private readonly orderService;
    constructor(unilevelService: UnilevelService, affiliateService: AffiliateService, orderService: OrderService);
    findAll(): Promise<import("./unilevel.entity").Unilevel[]>;
    findOne(id: number): Promise<import("./unilevel.entity").Unilevel>;
    findByDate(date: Date): Promise<import("./unilevel.entity").Unilevel[]>;
    create(createUnilevelDto: CreateUnilevelDto): Promise<import("./unilevel.entity").Unilevel>;
    update(id: number, updateUnilevelDto: UpdateUnilevelDto): string;
    remove(id: number): string;
}
