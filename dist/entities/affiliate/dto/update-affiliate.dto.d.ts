import { CreateAffiliateDto } from './create-affiliate.dto';
declare const UpdateAffiliateDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAffiliateDto>>;
export declare class UpdateAffiliateDto extends UpdateAffiliateDto_base {
    id: number;
    user_id: number;
    unilevel_id: number;
    firstmatrix_id: number;
    secondmatrix_id: number;
    name: string;
    createdAt: Date;
}
export {};
