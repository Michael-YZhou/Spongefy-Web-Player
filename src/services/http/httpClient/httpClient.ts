import axios from 'axios';
import type { AxiosInstance } from 'axios';
import type { HttpClientConfig } from './types';

const DEFAULT_LOADING = true;
/*
 * HttpClient class is a wrapper around axios instance.
 * It also wraps common axios methods like request, get, post, put, delete, etc.
 * It also allows user to attach optional interceptors to individual requests.
 */
class HttpClient {
  // in case of creating multiple instance of HttpClient,
  // each instance will have its own axios instance and config.
  instance: AxiosInstance;
  showLoading: boolean;
  loading?: string;
  // interceptors?: HttpClientInterceptor;

  constructor(config: HttpClientConfig) {
    this.instance = axios.create(config);
    this.showLoading = config.showLoading ?? DEFAULT_LOADING;

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
        // show loading spinner
        if (this.showLoading) {
          this.loading = 'Show Loading...';
          console.log(this.loading);
        }
        // attach token to request header
        // const token = localStorage.getItem('token') || '';
        // if (token) {
        //   config.headers.Authorization = `Bearer ${token}`;
        // }
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

        // hide loading spinner when response is received
        if (this.loading === 'Show Loading...') {
          this.loading = 'Hide Loading...';
          console.log(this.loading);
        }

        const { data } = response;
        // handle global error for request failed
        if (data && data.returnCode === '-1001') {
          console.log('Global Response Interceptor - Request Failed');

          // hide loading spinner when request failed
          if (this.loading === 'Show Loading...') {
            this.loading = 'Hide Loading...';
          }
          console.log(this.loading);
        }
        return response.data;
      },
      (error) => {
        console.log('Global Response Interceptor - Error', error);
        // handle global error for network error
        if (error.response.ststus === 404) {
          console.log('Global Response Interceptor - Error 404');
        }
        return Promise.reject(error);
      },
    );
  }

  // wrapper around axios.request. It accepts HttpClientConfig and returns a Promise. Default return type is any.
  request<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      // Apply a per-request interceptor to the request config (if provided by the user):
      if (config.interceptors?.requestInterceptor) {
        config = config.interceptors.requestInterceptor(config);
      }

      // Show loading spinner if user has set showLoading to true
      if (config.showLoading === false) {
        this.showLoading = config.showLoading;
      }

      // Send the request using the axios instance.
      return this.instance
        .request<any, T>(config)
        .then((response) => {
          // Apply a per-request interceptor to the response (if provided by the user):
          if (config.interceptors?.responseInterceptor) {
            response = config.interceptors.responseInterceptor(response);
          }

          // reset showLoading to true for subsequent requests
          this.showLoading = DEFAULT_LOADING;

          // resolve the response to the user
          resolve(response);
        })
        .catch((error) => {
          // reset showLoading to true for subsequent requests
          this.showLoading = DEFAULT_LOADING;
          // reject the error to the user
          reject(error);
        });
    });
  }

  // wrapper around axios.get. It accepts HttpClientConfig and returns a Promise. Default return type is any.
  get<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'GET' });
  }

  // wrapper around axios.post.
  post<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'POST' });
  }

  // wrapper around axios.put.
  put<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PUT' });
  }

  // wrapper around axios.delete.
  delete<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'DELETE' });
  }

  // wrapper around axios.patch.
  patch<T = any>(config: HttpClientConfig<T>): Promise<T> {
    return this.request<T>({ ...config, method: 'PATCH' });
  }
}

export default HttpClient;
