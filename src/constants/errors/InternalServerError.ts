import BaseError from './BaseError';

export default class InternalServerError extends BaseError {
  constructor() {
    super('Not Found', 404);
  }
}
