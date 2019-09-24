import * as request from 'request-promise';

export const makeRequest = async (url: string, options?: any) => {
  return request(url, options);
};
