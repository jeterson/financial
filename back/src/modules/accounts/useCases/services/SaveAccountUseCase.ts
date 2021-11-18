import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { inject, injectable } from "tsyringe";
import { Account } from "@modules/accounts/infra/sqlite/entities/Account";
import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";
import { response } from "express";

@injectable()
export class SaveAccountUseCase implements IExecute<Account, Account>{
  constructor(@inject("AccountRepository") private accountRepository: IAccountRepository) {}

  async execute(account: Account): Promise<Account> {
    if(!account.id) {      
      const savedAccount = await this.accountRepository.save(account);
      return savedAccount;   
    }else {      
      const existingAccount = await this.accountRepository.findOne(account.id)
      if(!existingAccount) {
        throw new HttpNotFoundError(`Nothing account to update. Try create this account`)
      }
      const savedAccount = await this.accountRepository.merge(existingAccount, account)
      return savedAccount;
    }
     
  }
}