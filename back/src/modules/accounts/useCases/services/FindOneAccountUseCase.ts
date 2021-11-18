import { inject, injectable } from "tsyringe";
import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";

@injectable()
export class FindOneAccountUseCase {
  constructor(@inject("AccountRepository") private accountRepository: IAccountRepository) {}
  
  async execute(id: number) {
    const account = await this.accountRepository.findOne(id)
    if(!account) {
      throw new HttpNotFoundError(`Account with id ${id} not found`)
    }
    return account
  }
}