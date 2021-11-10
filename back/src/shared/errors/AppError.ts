
export class AppError implements Error {
  public readonly message: string
  public readonly statusCode: number;
  public readonly name: string;
  public readonly stack?: string | undefined;

  constructor(message: string, statusCode: number, name?: string, stack?: string) {

    this.message = message;
    this.statusCode = statusCode;
    this.name = name || statusCode.toString();
    this.stack = stack
  }
}
