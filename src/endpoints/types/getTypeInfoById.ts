import axios, { AxiosResponse } from 'axios';
import { TypeMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns information about a metadata work type, as an example use monograph
export const getTypeInfoById = async (id: number, config?: RequestConfig) => {
  const { BASE_URL, TYPES } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${TYPES}${id}/${params}`;
  const result: AxiosResponse<TypeMessage> = await axios.get(url);

  return result.data;
};
