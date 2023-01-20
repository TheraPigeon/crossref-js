import axios from 'axios';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

const BASE_URL = 'https://api.crossref.org/';
const ENDPOINT = 'journals/';

// Return a list of journals in the Crossref database.
export const getJournals = async (config?: Omit<RequestConfig, 'sort'>) => {
  try {
    const params = createParams(config);
    const url = BASE_URL + ENDPOINT + params;
    const result = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching journals', err);
  }
};
