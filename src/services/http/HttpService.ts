import HttpClient from './httpClient/httpClient';
import { BASE_URL, TIME_OUT } from './httpClient/config';

// export an instance of HttpClient
export const httpClient = new HttpClient({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
  interceptors: {
    requestInterceptor: (config) => {
      console.log('request success');
      return config;
    },
    requestInterceptorCatch: (error) => {
      console.log('request failed');
      return error;
    },
    responseInterceptor: (res) => {
      console.log('response success');
      return res;
    },
    responseInterceptorCatch: (error) => {
      console.log('response failed');
      return error;
    },
  },
});
