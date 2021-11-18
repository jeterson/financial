import { Account } from "@modules/accounts/infra/sqlite/entities/Account";
import { FindOneAccountUseCase } from "@modules/accounts/useCases/services/FindOneAccountUseCase";
import { SaveAccountUseCase } from "@modules/accounts/useCases/services/SaveAccountUseCase";
import { CardFunction, CreditCard } from "@modules/creditCard/infra/sqlite/entities/CreditCard";
import { ICreditCardRepository } from "@modules/creditCard/repositories/ICreditCardRepository";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { container, inject, injectable } from "tsyringe";

export interface CreditCardDTO {
  
  id: number;
  name: string;
  function: CardFunction;
  accountId: number;
}

@injectable()
export class SaveCardUseCase implements IExecute<CreditCard, CreditCardDTO> {

  private findOneAccountUseCase: FindOneAccountUseCase;
  constructor(@inject("CreditCardRepository") private repository: ICreditCardRepository) {
    this.findOneAccountUseCase = container.resolve(FindOneAccountUseCase);
   }

  async execute(creditCardDTO: CreditCardDTO): Promise<CreditCard> {
    const creditCard = await this.creditCardFromDTO(creditCardDTO)
    
    if (!creditCard.id) {
      return await this.insert(creditCard)
    } else {
      return await this.update(creditCard);
    }
  }

  private async getAccount(id: number): Promise<Account> {
    const account = await this.findOneAccountUseCase.execute(id);
    if(!account) {
      throw new HttpNotFoundError(`Account with id ${id} not found`)
    }
    return account;
  }
  private async creditCardFromDTO(dto: CreditCardDTO): Promise<CreditCard> {
    const account = await this.getAccount(dto.accountId);
    const creditCard = new CreditCard();
    Object.assign(creditCard, dto)
    creditCard.account = account;
    return creditCard;
  }

  private async update(newCreditCard: CreditCard): Promise<CreditCard> {
    const existingCreditCard = await this.repository.findOne(newCreditCard.id);
    if (!existingCreditCard) {
      throw new HttpNotFoundError(`Nothing to change with id ${newCreditCard.id}. Try create a new credit card`)
    }
    return await this.repository.merge(existingCreditCard, newCreditCard);
  }

  private async insert(creditCard: CreditCard): Promise<CreditCard> {
    return await this.repository.save(creditCard);
  }

}