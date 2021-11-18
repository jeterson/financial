import { Account } from "../infra/sqlite/entities/Account";

export interface IAccountRepository {
  save(account: Account): Promise<Account>
  find(id: number, name: string, holder:string): Promise<Account[]>
  findOne(id: number): Promise<Account|undefined>
  delete(id: number): Promise<void>
  merge(oldAccount: Account, newAccount: Account): Promise<Account>
}