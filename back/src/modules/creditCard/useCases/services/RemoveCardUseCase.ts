import { ICreditCardRepository } from "@modules/creditCard/repositories/ICreditCardRepository";
import { HttpNotFoundError } from "@shared/errors/HttpNotFoundError";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { inject, injectable } from "tsyringe";

@injectable()
export class RemoveCardUseCase implements IExecute<void, number>{
  constructor(@inject("CreditCardRepository") private repository: ICreditCardRepository) {}
  
  async execute(id: number): Promise<void> {
    const existingCard = await this.repository.findOne(id)
    if(!existingCard) {
      throw new HttpNotFoundError(`Nothing to delete with id ${id}`);
    }
   await this.repository.delete(id);
  }
}