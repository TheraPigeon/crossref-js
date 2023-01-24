import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { WorksMessage } from '../works/types';

// Returns list of works associated with specified {prefix}.
export const getWorksByPrefix = async (
  prefix: string,
  config?: RequestConfig,
) => {
  const { BASE_URL, PREFIXES, WORKS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${PREFIXES}${prefix}/${WORKS}${params}`;
  const result: AxiosResponse<WorksMessage> = await axios.get(url);

  return result.data;
};
