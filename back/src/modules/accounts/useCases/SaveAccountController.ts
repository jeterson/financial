import { AppError } from '@shared/errors/AppError';
import { Request, Response } from 'express';
import { container } from 'tsyringe';
import { SaveAccountUseCase } from './SaveAccountUseCase'
export class SaveAccountController {

  async handle(request: Request, response: Response): Promise<Response> {
    
     
      const accountPayload = request.body;
      const accountUseCase = container.resolve(SaveAccountUseCase);
      const account = await accountUseCase.execute(accountPayload);
      return response.json(account);
   


  }
}