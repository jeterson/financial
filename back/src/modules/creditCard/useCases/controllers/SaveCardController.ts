import { CreditCard } from "@modules/creditCard/infra/sqlite/entities/CreditCard";
import { HttpStatus } from "@shared/errors/HttpStatus";
import { IController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { container } from "tsyringe";
import { SaveCardUseCase } from "../services/SaveCardUseCase";

export class SaveCardController implements IController {
  
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const saveCardUseCase = container.resolve(SaveCardUseCase);
    const cardToSave = req.body;
    const savedCard = await saveCardUseCase.execute(cardToSave);
    const status = req.method.toLowerCase() === 'post' ? HttpStatus.CREATED : HttpStatus.OK;
    return res.status(status).json(savedCard)
  }
}