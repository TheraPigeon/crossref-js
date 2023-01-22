import { ResponseMessage } from '../../types/ResponseMessage';

export type PrefixMessage = ResponseMessage<Prefix>;

export interface Prefix {
  member: string;
  name: string;
  prefix: string;
}
