import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { WorksMessage } from '../works/types';

// returns list of works of type {id}.
export const getWorksTypeById = async (id: number, config?: RequestConfig) => {
  const { BASE_URL, TYPES, WORKS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${TYPES}${id}/${WORKS}${params}`;
  const result: AxiosResponse<WorksMessage> = await axios.get(url);

  return result.data;
};
