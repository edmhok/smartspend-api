import { CreateAffiliateDto } from './create-affiliate.dto';
declare const UpdateAffiliateDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateAffiliateDto>>;
export declare class UpdateAffiliateDto extends UpdateAffiliateDto_base {
    id: number;
    user_id: number;
    firstmatrix_id: number;
    secondmatrix_id: number;
    status: string;
    enrolled_date: Date;
    link: string;
    comment: string;
    createdAt: Date;
}
export {};
