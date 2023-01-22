import axios, { AxiosResponse } from 'axios';
import { JournalMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Return a journal entry based on given ISSN
export const getJournalByISSN = async (
  id: string[],
  config?: RequestConfig,
) => {
  try {
    const { BASE_URL, JOURNALS } = endpoints;
    const params = createParams(config);
    const url = `${BASE_URL + JOURNALS}${id}/${params}`;
    const result: AxiosResponse<JournalMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journal', err);
    throw err;
  }
};
