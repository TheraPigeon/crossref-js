import axios, { AxiosResponse } from 'axios';
import { AgencyMessage } from './types';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';

// Gets the agency associated with a specific work by its DOI, as an example use DOI 10.5555/12345678
export const getAgencyWorksByDoi = async (
  doi: string,
  config?: RequestConfig,
) => {
  const { BASE_URL, WORKS, AGENCY } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${WORKS}${doi}/${AGENCY}${params}`;
  const result: AxiosResponse<AgencyMessage> = await axios.get(url);

  return result.data;
};
