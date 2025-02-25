import { httpClient } from '@/services/http/HttpService';

// API is too slow, use the featuredCharts data from the api-data.ts file instead
import { featuredCharts } from '@/assets/data/api-data';

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
  // return httpClient.get({
  //   url: '/playlist/detail',
  //   params: {
  //     id,
  //   },
  // });

  return Promise.resolve(
    featuredCharts.find((chart) => chart.playlist.id === id),
  );
}
