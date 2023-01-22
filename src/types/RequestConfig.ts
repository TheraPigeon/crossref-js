export interface RequestConfig {
  rows?: number; // The number of rows per page
  offset?: number; // The number of rows to skip before returning
  mailto?: string; // The email address to identify yourself and be in the “polite pool”
  sort?: SortOptions[]; // Results can be sorted by applying the sort and order parameters. sort sets the field by which results will be sorted. order sets the result ordering, either asc or desc (default is desc).
}

// TODO - add all sort options
export enum SortOptions {
  CREATED = 'created',
  DEPOSITED = 'deposited',
  INDEXED = 'indexed',
}
