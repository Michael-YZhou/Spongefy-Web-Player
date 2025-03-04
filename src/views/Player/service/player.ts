import { httpClient } from '@/services/http/HttpService';

export function getSongDetail(ids: number) {
  return httpClient.get({
    url: '/song/detail',
    params: {
      ids,
    },
  });
}
