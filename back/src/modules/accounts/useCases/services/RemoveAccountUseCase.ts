import { IAccountRepository } from "@modules/accounts/repositories/IAccountRepository";
import { ConstraintViolationError } from "@shared/errors/exceptions/ConstraintViolationError";
import { ObjectNotFoundException } from "@shared/errors/exceptions/ObjectNotFoundException";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveAccountUseCase implements IExecute<void, number>{
  constructor(@inject("AccountRepository") private accountRepository: IAccountRepository) { }


  async execute(id: number): Promise<void> {

    const account = await this.accountRepository.findOne(id);
    if (!account) {
      //throw new HttpNotFoundError(`Can't be remove account with id ${id} because account doesn't exists`)
      throw new ObjectNotFoundException('Account', ['Id', id])
    }
    try {
      return await this.accountRepository.delete(id);
    } catch (err: any) {
      throw new ConstraintViolationError(err)
    }
  }
}