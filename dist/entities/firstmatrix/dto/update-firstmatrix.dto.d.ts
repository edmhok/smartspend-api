import { CreateFirstmatrixDto } from './create-firstmatrix.dto';
declare const UpdateFirstmatrixDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFirstmatrixDto>>;
export declare class UpdateFirstmatrixDto extends UpdateFirstmatrixDto_base {
    id: number;
    order_id: number;
    affiliate_id: number;
    commission_fee: number;
    comment: string;
    createdAt: Date;
}
export {};
