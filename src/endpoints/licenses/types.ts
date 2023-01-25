import { ResponseMessage } from '../../types/ResponseMessage';

export type LicensesMessage = ResponseMessage<Licenses>;

export interface Licenses {
  'total-results': number;
  items: License[];
}

export interface License {
  URL: string;
  'work-count': number;
}
