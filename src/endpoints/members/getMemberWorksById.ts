import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { WorksMessage } from '../works/types';
import { createParams } from '../../utils/createParams';

// Returns list of works associated with a Crossref member (deposited by a Crossref member) with {id}.
export const getMemberWorksById = async (
  id: number,
  config?: RequestConfig,
) => {
  const { BASE_URL, MEMBERS, WORKS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${MEMBERS}${id}/${WORKS}${params}`;
  const result: AxiosResponse<WorksMessage> = await axios.get(url);

  return result.data;
};
