import { HttpBadRequestError } from "../HttpBadRequestError";
export class ConstraintViolationError extends HttpBadRequestError {

  constructor(err: any) {    
    const errorCode = `${err.errno} - ${err.code}`    
    const message = `Other object contains dependency of object that you trying remove. Code: ${errorCode}`
    super(message);    
  }
}

