import { Query } from '../../types/Query';
import { ResponseMessage } from '../../types/ResponseMessage';

export type MemberMessage = ResponseMessage<Member>;

export interface Member {
  'last-status-check-time': number;
  'primary-name': string;
  counts: DoiCounts;
  breakdowns: MembersMessageMessageItemsBreakdowns;
  prefixes: string[];
  coverage: CoverageFull;
  prefix: MemberPrefix[];
  id: number;
  token: string[];
  'counts-type': MembersMessageMessageItemsCountsType;
  'coverage-type': MembersMessageMessageItemsCoverageType;
  flags: any;
  location: string;
  names: string[];
}

export interface Members {
  'items-per-page': number;
  query: Query;
  'total-results': number;
  items: Member[];
}

export interface DoiCounts {
  'total-dois': number;
  'current-dois': number;
  'backfile-dois': number;
}

export interface MembersMessageMessageItemsBreakdowns {
  'dois-by-issued-year': number[][];
}

export interface CoverageFull {
  'affiliations-current': number;
  'similarity-checking-current': number;
  'descriptions-current': number;
  'ror-ids-current': number;
  'references-backfie': number;
  'funders-backfile': number;
  'licenses-backfile': number;
  'funders-current': number;
  'affiliations-backfile': number;
  'resource-links-backfile': number;
  'orcids-backfile': number;
  'update-policies-current': number;
  'ror-ids-backfile': number;
  'orcids-current': number;
  'similarity-checking-backfile': number;
  'descriptions-backfile': number;
  'award-numbers-backfile': number;
  'update-policies-backfile': number;
  'licenses-current': number;
  'award-numbers-current': number;
  'abstracts-backfile': number;
  'resource-links-current': number;
  'abstracts-current': number;
  'references-current': number;
}

export interface MemberPrefix {
  name: string;
  value: string;
}

// TODO remove any
export interface MembersMessageMessageItemsCountsType {
  all: any;
  current: any;
  backfile: any;
}

// TODO remove any
export interface MembersMessageMessageItemsCoverageType {
  all: any;
  current: any;
  backfile: any;
}
