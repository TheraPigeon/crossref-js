import axios, { AxiosResponse } from 'axios';
import { JournalsMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Return a list of journals in the Crossref database.
export const getJournals = async (config?: Omit<RequestConfig, 'sort'>) => {
  try {
    const { BASE_URL, JOURNALS } = endpoints;
    const params = createParams(config);
    const url = `${BASE_URL}${JOURNALS}${params}`;
    const result: AxiosResponse<JournalsMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journals', err);
    throw err;
  }
};
