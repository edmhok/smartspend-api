import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
export declare class Affiliate extends BaseEntity {
    id: number;
    user: User[];
    firstmatrix: Firstmatrix[];
    secondmatrix: Secondmatrix[];
    status: string;
    enrolled_date: Date;
    link: string;
    comment: string;
    createdAt: Date;
}
