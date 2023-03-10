import { RequestConfig } from '../types/RequestConfig';

// convert a request config object into a query param string
export const createParams = (config?: RequestConfig): string => {
  if (!config) {
    return '';
  }

  const entries = Object.entries(config);
  if (!entries.length) {
    return '';
  }

  let params = '?';

  entries.forEach(([key, val], i) => {
    params += key;
    params += '=';

    if (Array.isArray(val)) {
      const joinedVal = val.join(',');
      params += joinedVal;
    } else {
      params += `${val}`;
    }

    if (i < entries.length - 1) {
      params += '&';
    }
  });

  return params;
};
