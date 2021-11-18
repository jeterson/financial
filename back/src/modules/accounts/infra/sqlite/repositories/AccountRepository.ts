import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { getRepository, Repository } from "typeorm";
import { Account } from "../entities/Account";
export class AccountRepository implements IAccountRepository {
  private repository: Repository<Account>;

  constructor() {
    this.repository = getRepository(Account);
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }

  findOne(id: number): Promise<Account | undefined> {
    return this.repository.findOne(id)
  }

  async find(id: number, name: string, holder: string): Promise<Account[]> {
    const sqlQuery = `SELECT * FROM account WHERE 1=1
                      AND id = CASE WHEN :id = 0 THEN id ELSE :id END
                      AND UPPER(name) LIKE COALESCE('%'||UPPER(:name)||'%', UPPER(name))
                      AND UPPER(holder) LIKE COALESCE('%'||UPPER(:holder)||'%', UPPER(holder)) 
                      `
    return await this.repository.query(sqlQuery, [id, name, holder])

  }
  save(account: Account): Promise<Account> {
    return this.repository.save(account);
  }
  async merge(oldAccount: Account, newAccount: Account): Promise<Account> {
    return await this.repository.merge(oldAccount, newAccount);
  }
}

