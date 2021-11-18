import { Transaction } from "../infra/entities/Transaction";

export interface ITransactionRepository {
  save(obj: Transaction): Promise<Transaction>
  merge(obj: Transaction): Promise<Transaction>
}