import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { WorksMessage } from '../works/types';

// Returns list of works associated with a Crossref member (deposited by a Crossref member) with {id}.
export const getMemberWorksById = async (
  id: number,
  config?: RequestConfig,
) => {
  try {
    const { BASE_URL, MEMBERS, WORKS } = endpoints;
    const url = `${BASE_URL}${MEMBERS}${id}/${WORKS}`;
    const result: AxiosResponse<WorksMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log('error fetching member works');
    throw err;
  }
};
