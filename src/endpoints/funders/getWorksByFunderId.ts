import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { WorksMessage } from '../works/types';

// Returns list of works associated with the specified funder {id}.
export const getWorksByFunderId = async (
  id: number,
  config?: RequestConfig,
) => {
  try {
    const { BASE_URL, FUNDERS, WORKS } = endpoints;
    const params = createParams(config);
    const url = BASE_URL + FUNDERS + `${id}/` + WORKS + params;
    const result: AxiosResponse<WorksMessage> = await axios.get(url);

    return result.data;
  } catch (err) {
    console.log(`error fetching works for funder ${id}`, err);
    throw err;
  }
};
