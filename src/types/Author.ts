export interface Author {
  ORCID:  string,
  suffix: string,
  given: string,
  family:	string,
  affiliation: any[],
  name: string,
  'authenticated-orcid': boolean,
  prefix: string,
  sequence: string,
}
