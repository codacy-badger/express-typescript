import ErrorWithCode from './baseError';

export default class UnAuthorized extends ErrorWithCode {
    constructor() {
        super('Unauthorized', 401);
    }
}
