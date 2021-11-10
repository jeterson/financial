import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { getRepository, Repository } from "typeorm";
import { Account } from "../entities/Account";

export class AccountRepository implements IAccountRepository {
  private repository: Repository<Account>;
  
  constructor() {
    this.repository = getRepository(Account);
  }

  save(account: Account): Promise<Account> {
    return this.repository.save(account);
  }
}