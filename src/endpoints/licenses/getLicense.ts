import axios, { AxiosResponse } from 'axios';
import { endpoints } from '../../constants';
import { RequestConfig } from '../../types/RequestConfig';
import { createParams } from '../../utils/createParams';
import { LicensesMessage } from './types';

// Returns a list of licenses
export const getLicenses = async (config?: RequestConfig) => {
  const { BASE_URL, LICENSES } = endpoints;
  const params = createParams(config);
  const url = `${BASE_URL}${LICENSES}${params}`;
  const result: AxiosResponse<LicensesMessage> = await axios.get(url);

  return result.data;
};
