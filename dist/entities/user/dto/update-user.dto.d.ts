declare const UpdateUserDto_base: any;
export declare class UpdateUserDto extends UpdateUserDto_base {
    id: number;
    affiliate_id: number;
    store_id: number;
    products_id: number;
    order_id: number;
    email: string;
    password: string;
    membership: string;
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
