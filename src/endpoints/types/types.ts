import { Query } from '../../types/Query';
import { ResponseMessage } from '../../types/ResponseMessage';

export type TypeMessage = ResponseMessage<Type>;
export type TypesMessage = ResponseMessage<Types>;

export interface Type {
  id: string;
  label: string;
}

export interface Types {
  'items-per-page': number;
  query: Query;
  'total-results': number;
  items: Type[];
}
