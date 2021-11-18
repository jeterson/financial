import { inject, injectable } from "tsyringe";
import { Account } from "@modules/accounts/infra/sqlite/entities/Account";
import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";

interface IRequest {
  id: number,
  name: string,
  holder: string,
}

@injectable()
export class ListAccountUseCase implements IExecute<Account[],IRequest>{
  
  constructor(@inject("AccountRepository") private accountRepository: IAccountRepository) {}

  async execute(params: IRequest): Promise<Account[]> {  
    return this.accountRepository.find(params.id, params.name, params.holder)
  }
}

