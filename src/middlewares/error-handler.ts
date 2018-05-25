import { NextFunction, Request, Response } from 'express';

/* 404 error handler, backward errorHandler function */
export const error404 = (req: Request, res: Response, next: NextFunction) => {
  const err = new Error('Not Found');
  delete err.stack;
  next(err);
};

/* error handler */
export const errorHandler = (options: { template: string } = { template: '' }) => {
  return (error: any, req: Request, res: Response, next: NextFunction) => {
    let message;
    switch (error.status) {
      case 400:
        message = 'Bad Request';
        break;
      case 401:
        message = 'Unauthorized';
        break;
      case 404:
        message = 'Not Found';
        break;
      default:
        message = 'Internal server Error';
        error.status = 500;
        break;
    }
    if (options.template !== '') {
      res.render(options.template, { error, message });
    } else {
      res.status(error.status).json({ error, message });
    }
  };
};

export default (options: { template: string }) => [error404, errorHandler(options)];
