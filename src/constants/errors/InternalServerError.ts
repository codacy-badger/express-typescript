import BaseError from './BaseError';

export default class InternalServerError extends BaseError {
  constructor(stack: string | undefined) {
    super('Internal Server Error', 500);
    this.stack = stack;
  }
}