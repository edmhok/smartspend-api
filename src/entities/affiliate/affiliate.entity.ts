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
import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';
import { Secondmatrix } from '../secondmatrix/secondmatrix.entity';

  @Entity({ name: 'affiliate' })
  export class Affiliate extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => User, (user) => user.affiliate, { onDelete: 'CASCADE' })
    user: User[];

    @ManyToMany(() => Firstmatrix, (firstmatrix) => firstmatrix.affiliate, { onDelete: 'CASCADE' })
    firstmatrix: Firstmatrix[];

    @ManyToMany(() => Secondmatrix, (secondmatrix) => secondmatrix.affiliate, { onDelete: 'CASCADE' })
    secondmatrix: Secondmatrix[];

    @Column()
    status: string;
    
    @Column()
    enrolled_date: Date;

    @Column()
    link: string;

    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;
}