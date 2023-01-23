import axios, { AxiosResponse } from 'axios';
import { PrefixMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns metadata for the DOI owner prefix, as an example use prefix 10.1016
export const getPrefix = async (prefix: string, config?: RequestConfig) => {
  const { BASE_URL, PREFIXES } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${PREFIXES}${prefix}/${params}`;
  const result: AxiosResponse<PrefixMessage> = await axios.get(url);

  return result.data;
};
