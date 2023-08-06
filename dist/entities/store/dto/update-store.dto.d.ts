import { CreateStoreDto } from './create-store.dto';
declare const UpdateStoreDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateStoreDto>>;
export declare class UpdateStoreDto extends UpdateStoreDto_base {
    id: number;
    user_id: number;
    products_id: number;
    name: string;
    status: string;
    createdAt: Date;
}
export {};
