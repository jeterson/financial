import { HttpStatus } from "./HttpStatus";

export class AppError implements Error {
  public  message: string
  public  status: HttpStatus;
  public  name: string;
  public  stack?: string | undefined;

  constructor(message: string, status: number | HttpStatus, name?: string, stack?: string) {

    this.message = message;
    this.status = status
    this.name = name || status.toString();
    this.stack = stack
  }

  public create(err: AppError) {
    this.message = err.message;
    this.status = err.status
    this.name = err.name || err.status.toString();
    this.stack = err.stack
    
  }
}
