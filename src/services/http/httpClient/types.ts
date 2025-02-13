import type { AxiosRequestConfig, AxiosResponse } from 'axios';

// user can pass optional interceptors to HttpClient
interface HttpClientInterceptor<T = AxiosResponse> {
  requestInterceptor?: (config: AxiosRequestConfig) => AxiosRequestConfig;
  requestInterceptorCatch?: (error: any) => any;
  responseInterceptor?: (res: T) => T;
  responseInterceptorCatch?: (error: any) => any;
}

// extend AxiosRequestConfig to accept optional interceptors
export interface HttpClientConfig<T = AxiosResponse>
  extends AxiosRequestConfig {
  interceptors?: HttpClientInterceptor<T>;
  showLoading?: boolean;
}
