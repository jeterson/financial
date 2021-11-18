import { AppError } from "./AppError";
import { HttpStatus } from "./HttpStatus";

export class HttpBadRequestError extends AppError {
  
  constructor(message: string) {
    super(message, HttpStatus.BAD_REQUEST);
  }
  
}