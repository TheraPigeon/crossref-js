import axios, { AxiosResponse } from 'axios';
import { WorksMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns metadata for the specified Crossref DOI, as an example use DOI 10.5555/12345678
export const getWorksByDoi = async (doi: string, config?: RequestConfig) => {
  const { BASE_URL, WORKS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${WORKS}${doi}/${params}`;
  const result: AxiosResponse<WorksMessage> = await axios.get(url);

  return result.data;
};
