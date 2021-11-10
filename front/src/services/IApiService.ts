export type UrlParams = {
  [key: string]: any
}
export interface IApiService {
  post<T>(data: T): Promise<T>
  get<T>(params: UrlParams): Promise<T>
}