import { HttpStatus } from "@shared/errors/HttpStatus";
import { IController } from "@shared/infra/http/interfaces/IController";
import { IExecute } from "@shared/infra/http/interfaces/IExecute";
import { Request, Response } from "express";
import { ParamsDictionary } from "express-serve-static-core";
import { ParsedQs } from "qs";
import { container } from "tsyringe";
import { RemoveAccountUseCase } from "../services/RemoveAccountUseCase";

export class RemoveAccountController implements IController {
 

 
  async handle(req: Request<ParamsDictionary, any, any, ParsedQs, Record<string, any>>, res: Response<any, Record<string, any>>): Promise<Response<any, Record<string, any>>> {
    const accountUseCase = container.resolve(RemoveAccountUseCase);    
    await accountUseCase.execute(Number(req.params.id));
    return res.status(HttpStatus.NO_CONTENT)
  }

}