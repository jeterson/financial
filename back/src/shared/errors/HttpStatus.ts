export enum HttpStatus {
  NOT_FOUND = 404,
  BAD_REQUEST = 400,
  CREATED = 201,
  OK = 200,
  NO_CONTENT = 204,
  INTERNAL_SERVER_ERROR = 500,
  TO_MANY_REQUESTS = 429,
  UNPROCESSABLE_ENTITY = 422,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  NOT_IMPLEMENTED = 501,
  }

  export namespace HttpStatus {
    export function toEnum(status: number): HttpStatus {
      switch(status) {
        case 404: return HttpStatus.NOT_FOUND;
        case 400: return HttpStatus.BAD_REQUEST;
        case 201: return HttpStatus.CREATED;
        case 204: return HttpStatus.NO_CONTENT;
        case 200: return HttpStatus.OK;
        case 500: return HttpStatus.INTERNAL_SERVER_ERROR;
        case 429: return HttpStatus.TO_MANY_REQUESTS;
        case 422: return HttpStatus.UNPROCESSABLE_ENTITY;
        case 401: return HttpStatus.UNAUTHORIZED;
        case 403: return HttpStatus.FORBIDDEN
        case 501: return HttpStatus.NOT_IMPLEMENTED
        default: return HttpStatus.INTERNAL_SERVER_ERROR
      }
    }
  }