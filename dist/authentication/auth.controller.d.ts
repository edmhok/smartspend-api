import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: string;
        affiliate_id: any;
    }>;
    create(createUsersDto: CreateUserDto): Promise<{
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
}
