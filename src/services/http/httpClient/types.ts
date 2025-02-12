import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// user can pass optional interceptors to HttpClient
interface HttpClientInterceptor {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: AxiosResponse) => AxiosResponse;
  responseInterceptorCatch?: (error: any) => any;
}

// extend AxiosRequestConfig to accept optional interceptors
export interface HttpClientConfig extends AxiosRequestConfig {
  interceptors?: HttpClientInterceptor;
}
