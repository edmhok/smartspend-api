import { CreateSecondmatrixDto } from './create-secondmatrix.dto';
declare const UpdateSecondmatrixDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateSecondmatrixDto>>;
export declare class UpdateSecondmatrixDto extends UpdateSecondmatrixDto_base {
    id: number;
    order_id: number;
    affiliate_id: number;
    level: number;
    commission_fee: number;
    comment: string;
    createdAt: Date;
}
export {};
