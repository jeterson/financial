import { PrimaryGeneratedColumn } from "typeorm";

export class Transaction {
  @PrimaryGeneratedColumn()
  id: number
}