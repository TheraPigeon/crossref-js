import axios, { AxiosResponse } from 'axios';
import { TypesMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns a list of valid work types.
export const getWorkTypes = async (config?: RequestConfig) => {
  const { BASE_URL, TYPES } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${TYPES}${params}`;
  const result: AxiosResponse<TypesMessage> = await axios.get(url);

  return result.data;
};
