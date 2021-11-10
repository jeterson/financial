import { Entity, PrimaryColumn } from "typeorm";
import {v4 as uuid} from 'uuid'
@Entity('account')
export class Account {
  @PrimaryColumn()
  id: string;
  name: string;
  accountNumber: string;
  agency: string;
  holder: string;
  openingBalance: number;

  constructor() {
    if(!this.id) {
      this.id = uuid()
    }
  }
}