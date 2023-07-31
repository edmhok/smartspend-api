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
  import { Firstmatrix } from '../firstmatrix/firstmatrix.entity';

  @Entity({ name: 'secondmatrix' })
  export class Secondmatrix extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;
  
    @ManyToMany(() => Firstmatrix, (firstmatrix) => firstmatrix.secondmatrix, { onDelete: 'CASCADE' })
    @JoinTable()
    firstmatrix: Firstmatrix[];

    @ManyToMany(() => User, (user) => user.secondmatrix, { onDelete: 'CASCADE' })
    @JoinTable()
    user: User[];
  
    @ManyToMany(() => Affiliate, (affiliate) => affiliate.secondmatrix, { onDelete: 'CASCADE' })
    @JoinTable()
    affiliate: Affiliate[];
  
    @Column()
    comment: string;

    @CreateDateColumn()
    createdAt: Date;
}