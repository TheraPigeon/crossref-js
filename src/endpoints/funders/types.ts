import { Query } from '../../types/Query';
import { ResponseMessage } from '../../types/ResponseMessage';

export type FundersMessage = ResponseMessage<Funders>;
export type FunderMessage = ResponseMessage<FunderFull>;

export interface Funders {
  'items-per-page': number;
  query: Query;
  'total-results': number;
  items: Funder[];
}

export interface Funder {
  id: string; // The id of the funder
  location: string; // The geographic location of the funder
  name: string;
  'alt-names': string[]; // Other names this funder may be identified with
  uri: string;
  replaces: string[];
  'replaced-by': string[];
  tokens: string[];
}

export interface FunderFull {
  'hierarchy-names': any;
  'replaced-by': string[];
  'work-count': number;
  name: string;
  descendants: string[];
  'descendant-work-count': number;
  id: string;
  tokens: string[];
  replaces: string[];
  uri: string;
  hierarchy: any;
  'alt-names': string[];
  location: string;
}
