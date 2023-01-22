export interface RequestConfig {
  rows?: number; // The number of rows per page
  offset?: number; // The number of rows to skip before returning
  mailto?: string; // The email address to identify yourself and be in the “polite pool”
  sort?: SortOptions[]; // Results can be sorted by applying the sort and order parameters. sort sets the field by which results will be sorted. order sets the result ordering, either asc or desc (default is desc).
}

export enum SortOptions {
  CREATED = 'created', // sort by created date
  DEPOSITED = 'deposited', // sort by time of most recent deposit
  INDEXED = 'indexed', // sort by time of most recent index
  IS_REFERENCED_BY_COUNT = 'is-referenced-by-count', // sort by number of times this DOI is referenced by other Crossref DOIs
  ISSUED = 'issued', // sort by issued date (earliest known publication date)
  PUBLISHED = 'published', // sort by publication date
  PUBLISHED_ONLINE = 'published-online', // sort by online publication date
  PUBLISHED_PRINT = 'published-print', // sort by print publication date
  REFERENCES_COUNT = 'references-count', // sort by number of references included in the references section of the document identified by this DOI
  RELEVANCE = 'relevance', // sort by relevance score
  SCORE = 'score', // sort by relevance score
  UPDATED = 'updated', // sort by date of most recent change to metadata, currently the same as deposited
}
