import { AppError } from "./AppError";
import { HttpStatus } from "./HttpStatus";

export class HttpNotFoundError extends AppError {
  
  constructor(message: string) {
    super(message, HttpStatus.NOT_FOUND);
  }
  
}