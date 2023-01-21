import { Query } from "../../types/Query"

export interface FundersMessage {
  status: string,
  'message-type':	string,
  'message-version': string,
  message:	Funders[],
}


export interface Funders {
  'items-per-page':	number,
  query:	Query,
  'total-results': number,
  items: Funder[],
}

export interface Funder {    
  id:	string, // The id of the funder
  location: string, // The geographic location of the funder
  name: string,
  'alt-names': string[], // Other names this funder may be identified with
  uri: string,
  replaces: string[],
  'replaced-by':	string[],
  tokens:	string[],
}
