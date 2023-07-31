import { CreateFirstmatrixDto } from './create-firstmatrix.dto';
declare const UpdateFirstmatrixDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateFirstmatrixDto>>;
export declare class UpdateFirstmatrixDto extends UpdateFirstmatrixDto_base {
    id: number;
    secondmatrix_id: number;
    user_id: number;
    affiliate_id: number;
    comment: string;
    createdAt: Date;
}
export {};
