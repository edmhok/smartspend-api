import { FirstmatrixService } from './firstmatrix.service';
import { CreateFirstmatrixDto } from './dto/create-firstmatrix.dto';
import { UpdateFirstmatrixDto } from './dto/update-firstmatrix.dto';
import { AffiliateService } from '../affiliate/affiliate.service';
import { OrderService } from '../order/order.service';
export declare class FirstmatrixController {
    private firstmatrixService;
    private readonly affiliateService;
    private readonly orderService;
    constructor(firstmatrixService: FirstmatrixService, affiliateService: AffiliateService, orderService: OrderService);
    findAll(): Promise<import("./firstmatrix.entity").Firstmatrix[]>;
    findOne(id: number): Promise<import("./firstmatrix.entity").Firstmatrix>;
    findByDate(date: Date): Promise<import("./firstmatrix.entity").Firstmatrix[]>;
    create(createFirstmatrixDto: CreateFirstmatrixDto): Promise<import("./firstmatrix.entity").Firstmatrix>;
    update(id: number, updateFirstmatrixDto: UpdateFirstmatrixDto): string;
    remove(id: number): string;
}
