import axios, { AxiosResponse } from 'axios';
import { WorksMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns a list of all works (journal articles, conference proceedings, books, components, etc), 20 per page.
export const getWorks = async (config?: RequestConfig) => {
  const { BASE_URL, WORKS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${WORKS}${params}`;
  const result: AxiosResponse<WorksMessage> = await axios.get(url);

  return result.data;
};
