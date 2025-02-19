import { httpClient } from '@/services/http/HttpService';

// this is a service file that is used to make API calls
export function getBanners() {
  return httpClient.get({
    url: '/banner',
  });
}
