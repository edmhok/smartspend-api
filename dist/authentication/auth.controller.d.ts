import { AuthService } from './auth.service';
import { CreateUserDto } from 'src/entities/user/dto/create-user.dto';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    login(req: any): Promise<{
        access_token: any;
        affiliate_id: any;
        store_id: any;
    }>;
    create(createUsersDto: CreateUserDto): Promise<{
        id: number;
        email: string;
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
}
