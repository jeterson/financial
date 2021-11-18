import { AppError } from "@shared/errors/AppError";
import { IController } from "@shared/infra/http/interfaces/IController";
import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindOneAccountUseCase } from "../services/FindOneAccountUseCase";


export class FindOneAccountController implements IController {
  
  async handle(req: Request, res: Response): Promise<Response<any, Record<string, any>>> {
    const accountUseCase = container.resolve(FindOneAccountUseCase);
    const {id} = req.params
    const account = await accountUseCase.execute(Number(id))    
    return res.json(account)
  }
}