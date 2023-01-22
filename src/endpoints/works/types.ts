import { Author } from "../../types/Author";
import { DateParts, DateRecord } from "../../types/DateRecord";
import { Query } from "../../types/Query";
import { Reference } from "../../types/Reference";
import { ResponseMessage } from "../../types/ResponseMessage";

export type WorksMessage = ResponseMessage<Works>;

export interface Works {
  'items-per-page':	number,
  query: Query,
  'total-results': number,
  'next-cursor': string, // Used to navigate to the next page of results when using cursor deep paging
  items:	Work[],
}

export interface Work {
  institution: WorkInstitution,
  indexed: DateRecord,
  posted: DateParts,
  'publisher-location': string,
  'update-to': WorkUpdate[],
  'standards-body': WorkStandardsBody[],
  'edition-number':	string,
  'group-title': string,
  'reference-count': number,
  publisher: string,
  issue: string,
  'isbn-type': WorkISSNType[],
  license: WorkLicense[],
  funder: WorkFunder[],
  'content-domain':	WorkDomain,
  chair: Author[],
  'short-container-title': string,
  accepted:	DateParts,
  'content-updated': DateParts,
  'published-print': DateParts,
  abstract: string,
  DOI: string, // The DOI identifier associated with the work
  type: string,
  created: DateRecord,
  approved: DateParts,
  page: string,
  'update-policy': string,
  source: string,
  'is-referenced-by-count': number,
  title: string[],
  prefix:	string,
  volume: string,
  'clinical-trial-number': WorkClinicalTrial[],
  author: Author[],
  member: string,
  'content-created': DateParts,
  'published-online': DateParts,
  reference:	Reference,
  'container-title': string[],
  review: WorkReview,
  'original-title': string[],
  language: string,
  link: WorkLink[],
  deposited: DateRecord,
  score: number,
  degree: string,
  subtitle: string[],
  translator: Author[],
  'free-to-read':	WorkFreeToRead
  editor: Author[],
  'component-number':	string,
  'short-title': string[],
  issued: DateParts,
  ISBN: string[],
  'references-count': number,
  'part-number': string,
  'journal-issue': WorkJournalIssue,
  'alternative-id': string[],
  URL: string,
  archive: string[],
  relation: any,
  ISSN: string[],
  'issn-type': WorkISSNType[],
  subject: string[],
  'published-other': DateParts,
  published: DateParts,
  assertion: WorkAssertion[],
  subtype: string,
  'article-number': string,
}

export interface WorkInstitution {
  name:	string,
  place: string[],
  department:	string[],
  acronym:	string[],
}

export interface WorkUpdate {
  label: string
  DOI: string
  type: string
  updated: DateRecord,
}

export interface WorkStandardsBody {
  name:	string,
  acronym: string[],
}

export interface WorkISSNType{
  type:	string,
  value: string[],
}

export interface WorkLicense {
  URL: string,
  start: DateRecord,
  'delay-in-days': number,
  'content-version': string,
}

export interface WorkFunder {
  name:	string,
  DOI: string,
  'doi-asserted-by': string,
  award: string[],
}

export interface WorkDomain {
  domain: string[],
  'crossmark-restriction': boolean
}

export interface WorkClinicalTrial {
  'clinical-trial-number': string,
  registry: string
  type: string,
}

export interface WorkReview {
  type: string,
  'running-number': string,
  'revision-round': string,
  stage: string,
  'competing-interest-statement': string,
  recommendation: string,
  language: string,
}

export interface WorkLink {
  URL: string,
  'content-type': string,
  'content-version': string,
  'intended-application': string,
}


export interface WorkFreeToRead {
  'start-date': DateParts,
  'end-date':	DateParts,
}

export interface WorkJournalIssue {
  issue: string,
}

export interface WorkAssertion {
  group: WorksMessageMessageItemsAssertionGroup,
  explanation: WorksMessageMessageItemsAssertionExplanation,
  name: string,
  value: string,
  URL: string,
  order: number,
}

export interface WorksMessageMessageItemsAssertionGroup {
  name: string,
  label: string,
}

export interface WorksMessageMessageItemsAssertionExplanation {
  URL: string,
}
