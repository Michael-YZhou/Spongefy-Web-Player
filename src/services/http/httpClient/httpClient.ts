import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { HttpClientConfig } from './types';

/*
 * HttpClient class is a wrapper around axios instance.
 * It also wraps common axios methods like request, get, post, put, delete, etc.
 * It also allows user to attach optional interceptors to individual requests.
 */
class HttpClient {
  // in case of creating multiple instance of HttpClient,
  // each instance will have its own axios instance and config.
  instance: AxiosInstance;
  // interceptors?: HttpClientInterceptor;

  constructor(config: HttpClientConfig) {
    // Destructure custom interceptor from config so that only
    // the pure axios configuration is passed to axios.create.
    const { interceptors, ...axiosConfig } = config;
    this.instance = axios.create(axiosConfig);

    // Attach instance-specific interceptors if provided.
    // this.instance.interceptors.request.use(
    //   this.interceptors?.requestInterceptor,
    //   this.interceptors?.requestInterceptorCatch,
    // );

    // this.instance.interceptors.response.use(
    //   this.interceptors?.responseInterceptor,
    //   this.interceptors?.responseInterceptorCatch,
    // );

    // Optionally, attach global interceptors common to all axios instances
    this.instance.interceptors.request.use(
      (config) => {
        console.log('Global Request Interceptor - Success', config);
        return config;
      },
      (error) => {
        console.log('Global Request Interceptor - Error', error);
        return Promise.reject(error);
      },
    );

    this.instance.interceptors.response.use(
      (response) => {
        console.log('Global Response Interceptor - Success', response);
        return response;
      },
      (error) => {
        console.log('Global Response Interceptor - Error', error);
        return Promise.reject(error);
      },
    );
  }

  // wrapper around axios.request
  request(config: HttpClientConfig) {
    // Manually apply a per-request request interceptor (if provided):
    if (config.interceptors?.requestInterceptor) {
      config = config.interceptors.requestInterceptor(config);
    }

    // Remove the custom interceptors before handing the config to axios.
    const { interceptors, ...axiosConfig } = config;

    // Send the request using the axios instance.
    return this.instance.request(axiosConfig).then((response) => {
      // Manually apply a per-request response interceptor (if provided):
      if (config.interceptors?.responseInterceptor) {
        return config.interceptors.responseInterceptor(response);
      }
      return response;
    });
  }
}

export default HttpClient;
