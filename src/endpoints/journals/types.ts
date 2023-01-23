import { DoiCounts } from '../../types/DoiCounts';
import { Flags } from '../../types/Flags';
import { Query } from '../../types/Query';
import { ResponseMessage } from '../../types/ResponseMessage';

export type JournalMessage = ResponseMessage<Journal>;
export type JournalsMessage = ResponseMessage<Journals>;

export interface JournalIssnType {
  value: string;
  type: string;
}

export interface Coverage {
  'last-status-check-time': number;
  affiliations: number;
  abstracts: number;
  orcids: number;
  licenses: number;
  references: number;
  funders: number;
  'similarity-checking': number;
  'award-numbers': number;
  'ror-ids': number;
  'update-policies': number;
  'resource-links': number;
  descriptions: number;
}

export interface JournalsMessageMessageItemsCoverageType {
  all: Coverage;
  current: Coverage;
  backfile: Coverage;
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

export interface JournalsMessageMessageItemsBreakdowns {
  'dois-by-issued-year': number[];
}

export interface Journal {
  'last-status-check-time': number;
  counts: DoiCounts;
  breakdowns: JournalsMessageMessageItemsBreakdowns;
  publisher: string; // The publisher of the journal
  coverage: CoverageFull;
  title: string;
  subjects: string[];
  'coverage-type': JournalsMessageMessageItemsCoverageType;
  flags: Flags;
  ISSN: string[];
  'issn-type': JournalIssnType;
}

export interface Journals {
  'items-per-page': number;
  query: Query;
  'total-results': number;
  items: Journal;
}
