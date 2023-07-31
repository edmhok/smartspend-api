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
    }>;
    create(data: any): Promise<{
        id: number;
        firstmatrix: import("../entities/firstmatrix/firstmatrix.entity").Firstmatrix[];
        secondmatrix: import("../entities/secondmatrix/secondmatrix.entity").Secondmatrix[];
        affiliate: import("../entities/affiliate/affiliate.entity").Affiliate[];
        products: import("../entities/products/products.entity").Products[];
        order: import("../entities/order/order.entity").Order[];
        username: string;
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
    }>;
    decodeToken(token: any): any;
}
