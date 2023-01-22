import { Query } from '../../types/Query';
import { ResponseMessage } from '../../types/ResponseMessage';

export type JournalMessage = ResponseMessage<Journal>;
export type JournalsMessage = ResponseMessage<Journals>;

export interface JournalIssnType {
  value: string;
  type: string;
}

export interface Flags {
  'deposits-abstracts-current': boolean;
  'deposits-orcids-current': boolean;
  deposits: boolean;
  'deposits-affiliations-backfile': boolean;
  'deposits-update-policies-backfile': boolean;
  'deposits-award-numbers-current': boolean;
  'deposits-resource-links-current': boolean;
  'deposits-ror-ids-current': boolean;
  'deposits-articles': boolean;
  'deposits-affiliations-current': boolean;
  'deposits-funders-current': boolean;
  'deposits-references-backfile': boolean;
  'deposits-ror-ids-backfile': boolean;
  'deposits-abstracts-backfile': boolean;
  'deposits-licenses-backfile': boolean;
  'deposits-award-numbers-backfile': boolean;
  'deposits-descriptions-current': boolean;
  'deposits-references-current': boolean;
  'deposits-resource-links-backfile': boolean;
  'deposits-descriptions-backfile': boolean;
  'deposits-orcids-backfile': boolean;
  'deposits-funders-backfile': boolean;
  'deposits-update-policies-current': boolean;
  'deposits-licenses-current': boolean;
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

export interface DoiCounts {
  'total-dois': number;
  'current-dois': number;
  'backfile-dois': number;
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
