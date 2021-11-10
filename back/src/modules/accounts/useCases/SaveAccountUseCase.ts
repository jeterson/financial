import { AppError } from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { Account } from "../infra/sqlite/entities/Account";
import { AccountRepository } from "../infra/sqlite/repositories/AccountRepository";

@injectable()
export class SaveAccountUseCase {
  constructor(@inject("AccountRepository") private accountRepository: AccountRepository) {}

  async execute(account: Account):Promise<Account> { 
    throw new AppError("1", 400);   
    const savedAccount = await this.accountRepository.save(account)
    return savedAccount;    
  }
}