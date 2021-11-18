import { IController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { container } from "tsyringe";
import { ListCardsUseCase } from "../services/ListCardsUseCase";

export class ListCardsController implements IController {

  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const listCardsUseCase = container.resolve(ListCardsUseCase);
    const {id, name, accountId} = req.query
    const cards = await listCardsUseCase.execute({
      accountId: Number(accountId) || 0,
      id: Number(id) || 0,
      name: name as string
    })

    return res.json(cards)
  }
}