import { IController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { container } from "tsyringe";
import { FindOneCardUseCase } from "../services/FindOneCardUseCase";

export class FindOneCardController implements IController {
 
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const {id} = req.params
    const findOneCardUseCase = container.resolve(FindOneCardUseCase)
    const card = await findOneCardUseCase.execute(Number(id))
    return res.json(card);
  }
}