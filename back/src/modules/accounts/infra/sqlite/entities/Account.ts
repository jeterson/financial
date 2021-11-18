import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
@Entity('account')
export class Account {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  accountNumber: string;
  @Column()
  agency: string;
  @Column()
  holder: string;
  @Column()
  openingBalance: number;

  constructor() {  
  }
}