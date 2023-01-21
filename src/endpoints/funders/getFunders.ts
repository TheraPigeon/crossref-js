import axios from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns a list of all funders in the Funder Registry. https://gitlab.com/crossref/open_funder_registry
export const getFunders = async (config?: RequestConfig) => {
  try {
    const { BASE_URL, FUNDERS } = endpoints;
    const params = createParams(config);
    const url = BASE_URL + FUNDERS + params;
    const result = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching funders', err);
    throw err;
  }
};
