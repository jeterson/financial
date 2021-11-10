import { Account } from "../infra/sqlite/entities/Account";

export interface IAccountRepository {
  save(account: Account): Promise<Account>
}