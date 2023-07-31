import { CreateUserDto } from './create-user.dto';
declare const UpdateUserDto_base: import("@nestjs/mapped-types").MappedType<Partial<CreateUserDto>>;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    firstmatrix_id: number;
    secondmatrix_id: number;
    affiliate_id: number;
    products_id: number;
    order_id: number;
    username: string;
    password: string;
    membership: string;
    commission_fee: number;
    first_name: string;
    middle_name: string;
    last_name: string;
    birthdate: Date;
    phone: number;
    address: string;
    country: string;
    city: string;
    state: string;
    zipcode: string;
    createdAt: Date;
}
export {};
