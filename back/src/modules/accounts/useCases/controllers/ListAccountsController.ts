

import { IController } from '@shared/infra/http/interfaces/IController';
import {Request, Response} from 'express'
import { container } from 'tsyringe';
import { ListAccountUseCase } from '../services/ListAccountUseCase';

export class ListAccountsController implements IController {
  
  async handle(req: Request, res: Response): Promise<Response> {    
    const {id,name,holder} = req.query;
    const accountUseCase = container.resolve(ListAccountUseCase);
    const accounts = await accountUseCase.execute({
      id: Number(id)||0,
      name: name as string,
      holder: holder as string
    });
    return res.json(accounts)
  }
}