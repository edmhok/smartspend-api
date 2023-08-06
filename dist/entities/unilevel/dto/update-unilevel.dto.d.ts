import { CreateUnilevelDto } from './create-unilevel.dto';
declare const UpdateUnilevelDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUnilevelDto>>;
export declare class UpdateUnilevelDto extends UpdateUnilevelDto_base {
    id: number;
    affiliate_id: number;
    order_id: number;
    commission_fee: number;
    comment: string;
    createdAt: Date;
}
export {};
