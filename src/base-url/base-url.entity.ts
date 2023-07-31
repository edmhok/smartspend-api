
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class BaseUrl {

  @PrimaryGeneratedColumn()
  id: number;

  @Column() 
  url: string;

}