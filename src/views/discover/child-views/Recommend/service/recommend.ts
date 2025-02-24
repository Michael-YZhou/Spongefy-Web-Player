import { httpClient } from '@/services/http/HttpService';

// this is a service file that is used to make API calls
export function getBanners() {
  return httpClient.get({
    url: '/banner',
  });
}

export function getPopularAlbums(limit = 30) {
  return httpClient.get({
    url: '/personalized',
    params: {
      limit,
    },
  });
}

export function getNewAlbums() {
  return httpClient.get({
    url: '/album/newest',
  });
}

export function getPlayListDetail(id: number) {
  return httpClient.get({
    url: '/playlist/detail',
    params: {
      id,
    },
  });
}
