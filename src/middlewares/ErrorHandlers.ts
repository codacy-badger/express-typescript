import { NextFunction, Request, Response } from 'express';
import {
  BaseError,
  InternalServerError,
  NotFoundError,
} from '../constants/errors';

interface IErrorHandlerOption {
  templateName: string,
}

const defaultErrorHandlerOption = {
  templateName: 'error',
};

/* 404 error handler, backward errorHandler function */
export const notFoundHandler = (req: Request, res: Response, next: NextFunction) => {
  next(new NotFoundError());
};

/* catch other Errors and replace them by InternalServerError */
export const errorUnifyHandler = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if(error instanceof BaseError === false) {
    return next(new InternalServerError());
  }
  next(error);
};

/* Error handler */
export const errorHandler =  (error: BaseError, req: Request, res: Response, next: NextFunction) => {
  res.status(error.code).json({ message: error.message });
};

const errorHandlers =  [notFoundHandler, errorUnifyHandler, errorHandler];

export default errorHandlers;

const spreadError = (res: Response, error: BaseError, options: IErrorHandlerOption) => {
  if(options.templateName !== defaultErrorHandlerOption.templateName) {
    res.render(options.templateName, { error });
  } else {
    res.status(error.code).json({message: error.message});
  }
};
