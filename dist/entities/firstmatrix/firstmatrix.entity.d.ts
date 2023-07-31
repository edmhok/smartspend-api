import { BaseEntity } from 'typeorm';
import { User } from '../user/user.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';
export declare class Firstmatrix extends BaseEntity {
    id: number;
    secondmatrix: Secondmatrix[];
    user: User[];
    affiliate: Affiliate[];
    comment: string;
    createdAt: Date;
}
