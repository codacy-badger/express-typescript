interface IErrorJson {
  code: number,
  message: string,
  stack?: string,
}

export default class BaseError extends Error {
  public code: number;
  constructor(message: string, code: number) {
    super(message);
    this.code = code;
  }
  public toJson(): IErrorJson {
    const errorJson: IErrorJson = {
      code: this.code,
      message: this.message,
    };
    console.log(process.env.NODE_ENV);
    if (process.env.NODE_ENV !== 'production') {
      errorJson.stack = this.stack;
    }
    return errorJson;
  }
}
