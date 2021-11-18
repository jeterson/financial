import { CreditCard } from "@modules/creditCard/infra/sqlite/entities/CreditCard";
import { ICreditCardRepository } from "@modules/creditCard/repositories/ICreditCardRepository";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { inject, injectable } from "tsyringe";

@injectable()
export class FindOneCardUseCase implements IExecute<CreditCard|undefined, number> {
  
  
  constructor(@inject("CreditCardRepository") private repository: ICreditCardRepository) {
    
   }
  async execute(id: number): Promise<CreditCard | undefined> {
    const card = await this.repository.findOne(id)
    if(!card) {
      throw new HttpNotFoundError(`Credit Card with id ${id} not found`)
    }
    return card;
  }
 
  

}