import BaseError from './BaseError';

export default class BadRequestError extends BaseError {
  constructor() {
    super('Bad Request', 400);
  }
}
