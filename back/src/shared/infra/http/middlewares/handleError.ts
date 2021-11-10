import { AppError } from '@shared/errors/AppError';
import { NextFunction, Response, Request } from 'express';

export const handleError = (err: Error,
  request: Request,
  response: Response,
  next: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({ message: err.message });
  }
  return response.status(500).json({
    status: "error",
    message: `Internal server error - ${err.message}`,
  });

  
}