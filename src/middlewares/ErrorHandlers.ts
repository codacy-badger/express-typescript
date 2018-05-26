import { NextFunction, Request, Response } from 'express';
import {
  BaseError,
  InternalServerError,
  NotFoundError,
} from '../constants/errors';

/* 404 error handler, backward errorHandlers function */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
};

/* catch other Errors and replace them by InternalServerError */
export const errorUnifierHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof BaseError === false) {
    return next(new InternalServerError(error.stack));
  }
  next(error);
};

/* Error handler */
export const errorHandler =  (error: BaseError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.code).json(error.toJson());
};

const ErrorsMiddleware =  [notFoundHandler, errorUnifierHandler, errorHandler];

export default ErrorsMiddleware;
