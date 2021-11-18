import { FindOneAccountUseCase } from "@modules/accounts/useCases/services/FindOneAccountUseCase";
import { CreditCard } from "@modules/creditCard/infra/sqlite/entities/CreditCard";
import { ICreditCardRepository } from "@modules/creditCard/repositories/ICreditCardRepository";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { container, inject, injectable } from "tsyringe";


interface IRequest {
  id: number,
  name: string,
  accountId: number
}

@injectable()
export class ListCardsUseCase implements IExecute<CreditCard[], IRequest> {

  private accountFindOneUseCase: FindOneAccountUseCase;
  constructor(@inject("CreditCardRepository") private repository: ICreditCardRepository) {
    this.accountFindOneUseCase = container.resolve(FindOneAccountUseCase);
  }

  async execute(param: IRequest): Promise<CreditCard[]> {
    let cards = await this.repository.find(param.id, param.name, param.accountId)    
    const cardsWihAccount = Promise.all(cards.map(async (card: any) => {      
      card.account = await this.accountFindOneUseCase.execute(card.accountId)
      return card as CreditCard;
    }))
    
   return cardsWihAccount
  }
}