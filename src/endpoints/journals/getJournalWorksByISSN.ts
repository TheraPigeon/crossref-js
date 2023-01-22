import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { WorksMessage } from '../works/types';

// Returns a list of works in the journal identified by {issn}.
export const getJournalWorksByISSN = async (
  id: string[],
  config?: RequestConfig,
) => {
  try {
    const { BASE_URL, JOURNALS, WORKS } = endpoints;
    const params = createParams(config);
    const url = `${BASE_URL + JOURNALS}${id}/${WORKS + params}`;
    const result: AxiosResponse<WorksMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journal works', err);
    throw err;
  }
};
