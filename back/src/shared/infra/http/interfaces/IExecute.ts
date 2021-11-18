export interface IExecute<T,P> {
  execute(param: P): Promise<T>;
  //execute<T,P>(param: P): Promise<T>;
}

export interface ISingleExecute<P> extends IExecute<void,P> {}
