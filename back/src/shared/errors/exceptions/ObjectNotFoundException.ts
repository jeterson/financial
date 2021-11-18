import { HttpNotFoundError } from "../HttpNotFoundError";

export class ObjectNotFoundException extends HttpNotFoundError {

  constructor(private objectName: string, private params?: any[]) {
    super('');
    this.message = this.generateMessage();        
  }

  isPair(value: number): boolean {
    return value % 2 === 0
  }

  private generateMessage(): string {
    let messageParams: any = {};
    if (this.params) {
      for (let i = 0; i < this.params?.length; i++) {
        if (this.isPair(i)) {
          const key = this.params[i];
          const value = this.params[i+1];
          messageParams[key] = value
        }
      }     
    }

    const keysParams = Object.keys(messageParams);
    let paramsValues = keysParams.map(key => {
      return `${key}=${messageParams[key]}`
    })
    

    const message = `Object ${this.objectName} not found`
    if(paramsValues.length) {
      return `${message} with params. ${paramsValues.join(',')}`
    }else {
      return `${message}.`;
    }
  }
}