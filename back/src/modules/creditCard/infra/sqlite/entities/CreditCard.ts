import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import {Account} from '@modules/accounts/infra/sqlite/entities/Account'
export enum CardFunction {
  DEBIT = 'D',
  CREDIT = 'C',
  BOTH = 'B'
}

@Entity()
export class CreditCard {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  function: CardFunction;

  @ManyToOne(() => Account)
  account: Account;

}
