import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
export declare class Secondmatrix extends BaseEntity {
    id: number;
    firstmatrix: Firstmatrix[];
    user: User[];
    affiliate: Affiliate[];
    comment: string;
    createdAt: Date;
}
