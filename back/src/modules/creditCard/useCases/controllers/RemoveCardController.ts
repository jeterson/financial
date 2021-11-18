import { HttpStatus } from "@shared/errors/HttpStatus";
import { IController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { container } from "tsyringe";
import { RemoveCardUseCase } from "../services/RemoveCardUseCase";

export class RemoveCardController implements IController {
 
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const removeCardUseCase = container.resolve(RemoveCardUseCase);
    const {id} = req.params
    await removeCardUseCase.execute(Number(id))
    return res.status(HttpStatus.OK).json()
  }
}