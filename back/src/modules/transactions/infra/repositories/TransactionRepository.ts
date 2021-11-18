import { ITransactionRepository } from "@modules/transactions/repositories/ITransactionRepository";
import { Transaction } from "../entities/Transaction";

export class TransactionRepository implements ITransactionRepository{
  
  save(obj: Transaction): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }
  merge(obj: Transaction): Promise<Transaction> {
    throw new Error("Method not implemented.");
  }

}