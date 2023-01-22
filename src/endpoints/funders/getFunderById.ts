import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { FunderMessage } from './types';

// Returns metadata for specified funder and its suborganizations, as an example use id 501100006004
export const getFunderById = async (id: number, config?: RequestConfig) => {
  try {
    const { BASE_URL, FUNDERS } = endpoints;
    const params = createParams(config);
    const url = BASE_URL + FUNDERS + `${id}/` + params;
    const result: AxiosResponse<FunderMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log(`error fetching funder ${id}`, err);
    throw err;
  }
};
