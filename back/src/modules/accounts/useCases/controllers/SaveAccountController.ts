import { Account } from '@modules/accounts/infra/sqlite/entities/Account';
import { AppError } from '@shared/errors/AppError';
import { HttpStatus } from '@shared/errors/HttpStatus';
import { IController } from '@shared/infra/http/interfaces/IController';

import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SaveAccountUseCase } from '../services/SaveAccountUseCase'
export class SaveAccountController implements IController {

  async handle(request: Request, response: Response): Promise<Response> {    
      const accountPayload = request.body as  Account;
      const accountUseCase = container.resolve(SaveAccountUseCase);
      const account = await accountUseCase.execute(accountPayload);
      
      const status = request.method.toLowerCase() === 'post' ? HttpStatus.CREATED : HttpStatus.OK;
      return response.status(status).json(account)   
  }
}