import {
    Column,
    CreateDateColumn,
    Entity,
    PrimaryGeneratedColumn,
    JoinTable,
    BaseEntity,
    ManyToMany,
  } from 'typeorm';
import { User } from '../user/user.entity';
import { Affiliate } from '../affiliate/affiliate.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';

  @Entity({ name: 'firstmatrix' })
  export class Firstmatrix extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => Secondmatrix, (secondmatrix) => secondmatrix.firstmatrix, { onDelete: 'CASCADE' })
    secondmatrix: Secondmatrix[];

    @ManyToMany(() => User, (user) => user.firstmatrix, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];
  
    @ManyToMany(() => Affiliate, (affiliate) => affiliate.firstmatrix, { onDelete: 'CASCADE' })
    @JoinTable()
    affiliate: Affiliate[];
  
    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;
}