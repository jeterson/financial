import { Request, Response } from 'express'
import { container, InjectionToken } from 'tsyringe';

export interface IController {
  handle(req: Request, res: Response): Promise<Response>

}

export abstract class BaseController<T> implements IController {
  abstract handle(req: Request, res: Response): Promise<Response>;  
 
  public resolve(token: InjectionToken<T>): T {    
    const execution = container.resolve(token)
    return execution;
  }
}