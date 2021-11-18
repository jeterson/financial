import { CreditCard } from "../infra/sqlite/entities/CreditCard";

export interface ICreditCardRepository {
  save(obj: CreditCard): Promise<CreditCard>;
  merge(oldCard: CreditCard, newCard: CreditCard): Promise<CreditCard>;
  delete(id: number): Promise<void>;
  find(id: number, name: string, accountId: number): Promise<CreditCard[]>;
  findOne(id: number): Promise<CreditCard| undefined>
}