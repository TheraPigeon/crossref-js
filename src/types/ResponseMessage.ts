export interface ResponseMessage<T> {
  status: string;
  'message-type': string;
  'message-version': string;
  message: T;
}
