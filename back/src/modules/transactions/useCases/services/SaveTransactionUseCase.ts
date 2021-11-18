import { Transaction } from "@modules/transactions/infra/entities/Transaction";
import { ITransactionRepository } from "@modules/transactions/repositories/ITransactionRepository";
import { inject, injectable, singleton } from "tsyringe";
import { ISaveTransactionUseCase, TransactionDTO } from "../interfaces";



@injectable()
export class SaveTransactionUseCase implements ISaveTransactionUseCase {
  
  constructor(@inject("TransactionRepository") private repository: ITransactionRepository) {}

  execute(dto: TransactionDTO): Promise<Transaction> {
    const transaction = this.fromDTO(dto)

    if(transaction.id) {
      return this.update(transaction)
    }else {
      return this.insert(transaction)
    }
    
    return Promise.resolve(transaction);
  }
  
 private fromDTO(dto: TransactionDTO): Transaction {
  const transaction = new Transaction();
  Object.assign(transaction, dto)
  return transaction;
 }
  private insert(obj: Transaction): Promise<Transaction> {
    return this.repository.save(obj)
  }
  private update(obj: Transaction): Promise<Transaction> {
    return this.repository.merge(obj)
  }
  

}