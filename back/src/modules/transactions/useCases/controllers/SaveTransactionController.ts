import { HttpStatus } from "@shared/errors/HttpStatus";
import { BaseController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { inject, injectable } from "tsyringe";
import { ISaveTransactionUseCase } from "../interfaces";
import { SaveTransactionUseCase } from "../services/SaveTransactionUseCase";

@injectable()
export class SaveTransactionController {

  constructor(@inject('SaveTransactionUseCase') private service: ISaveTransactionUseCase) {
   
  }
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
   /* const saveTransactionUseCase = super.resolve(SaveTransactionUseCase);
    const transactionSaved = await saveTransactionUseCase.execute(req.body)
    const status = req.method.toLowerCase() === 'post' ? HttpStatus.CREATED : HttpStatus.OK;

    return res.status(status).json(transactionSaved)
    */

    const status = req.method.toLowerCase() === 'post' ? HttpStatus.CREATED : HttpStatus.OK;
   const saveTransactionUseCase = this.service.execute(req.body)
   return res.json(saveTransactionUseCase).status(status)
  }
}