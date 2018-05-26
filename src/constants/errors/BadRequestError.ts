import ErrorWithCode from './baseError';

export default class NotFound extends ErrorWithCode {
    constructor() {
        super('Unauthorized', 401);
    }
}
