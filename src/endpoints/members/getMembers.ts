import axios, { AxiosResponse } from 'axios';
import { MemberMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

export const getMembers = async (config?: RequestConfig) => {
  try {
    const { BASE_URL, MEMBERS } = endpoints;
    const params = createParams(config);
    const url = `${BASE_URL}${MEMBERS}${params}`;
    const result: AxiosResponse<MemberMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching members', err);
    throw err;
  }
};
