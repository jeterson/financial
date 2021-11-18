import { Transaction } from "@modules/transactions/infra/entities/Transaction";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";

export interface IRequest  {}
export interface TransactionDTO {
  id?: number
}
export interface ISaveTransactionUseCase extends IExecute<Transaction,TransactionDTO> {}
export interface IFindOneTransactionUseCase extends IExecute<Transaction,number> {}
export interface IFindTransactionsUseCase extends IExecute<Transaction[],IRequest> {}
export interface IRemoveTransactionUseCase extends IExecute<void, number> {}