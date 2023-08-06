import { UserService } from '../entities/user/user.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    validateUser(email: string, password: string): Promise<any>;
    login(user: any): Promise<{
        access_token: string;
        affiliate_id: any;
        store_id: any;
    }>;
    create(data: any): Promise<{
        id: number;
        affiliate: import("../entities/affiliate/affiliate.entity").Affiliate[];
        products: import("../entities/products/products.entity").Products[];
        order: import("../entities/order/order.entity").Order[];
        store: import("../entities/store/store.entity").Store[];
        role: string;
        username: string;
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
    }>;
    decodeToken(token: any): any;
}
