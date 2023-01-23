import axios, { AxiosResponse } from 'axios';
import { MemberMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Returns metadata for a Crossref member, as an example use id 324
export const getMembersById = async (id: number, config?: RequestConfig) => {
  const { BASE_URL, MEMBERS } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${MEMBERS}${id}/${params}`;
  const result: AxiosResponse<MemberMessage> = await axios.get(url);

  return result.data;
};
