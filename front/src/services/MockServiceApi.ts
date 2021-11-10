import toast from 'react-hot-toast'
import { IApiService, UrlParams } from './IApiService';



export class MockServiceApi implements IApiService {

  constructor() { }

  private getRandomInt(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  private isThrowError() {
    const number = this.getRandomInt(1, 3)

    return number === 1 ? false : true;
  }

  private mockApi<T>(data: T): Promise<T> {
    return new Promise((resolve, reject) => {
      if (this.isThrowError()) {
        reject(new Error)
      } else {
       resolve(data);
      }
    })
  }

  get<T>(params: UrlParams): Promise<T> {
    return this.mockApi<T>(params['dataToReturn']);
  }
  post<T>(data: T): Promise<T> {
    return this.mockApi<T>(data);
  }



}