import BaseError from './BaseError';

export default class UnAuthorizedError extends BaseError {
  constructor() {
    super('Unauthorized', 401);
  }
}
