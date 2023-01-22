import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Return a journal entry based on given ISSN
export const getJournlByISSN = async (id: string[], config?: RequestConfig) => {
  try {
    const { BASE_URL, JOURNALS } = endpoints;
    const params = createParams(config);
    const url = `${BASE_URL + JOURNALS}${id}/${params}`;
    const result: AxiosResponse = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journal', err);
  }
};
