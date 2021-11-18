import { ICreditCardRepository } from "@modules/creditCard/repositories/ICreditCardRepository";
import { getRepository, Repository } from "typeorm";
import { CreditCard } from "../entities/CreditCard";

export class CreditCardRepository implements ICreditCardRepository {
  private repository: Repository<CreditCard>;

  constructor() {
    this.repository = getRepository(CreditCard)
  }
  save(obj: CreditCard): Promise<CreditCard> {
    return this.repository.save(obj)
  }
  async merge(oldCard: CreditCard, newCard: CreditCard): Promise<CreditCard> {
    return await this.repository.merge(oldCard, newCard)
  }
  async delete(id: number): Promise<void> {
    await this.repository.delete(id)
  }
  async find(id: number, name: string, accountId: number): Promise<CreditCard[]> {    
    const sqlQuery = `SELECT * FROM credit_card WHERE 1=1 
                     AND UPPER(name) LIKE COALESCE('%'||UPPER(:name)||'%', UPPER(name))
                     AND accountId = CASE WHEN :accountId = 0 THEN accountId ELSE :accountId END
                     AND id = CASE WHEN :id = 0 THEN id ELSE :id END`

    return await this.repository.query(sqlQuery, [name, accountId, id])
  }
  findOne(id: number): Promise<CreditCard | undefined> {
    return this.repository.findOne(id, {relations: ['account']})
  }

}