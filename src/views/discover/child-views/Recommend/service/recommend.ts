import { httpClient } from '@/services/http/HttpService';

// API is too slow, use the local data from the api-data folder instead
import {
  banners,
  popularAlbums,
  newAlbums,
  featuredCharts,
  artistsList,
} from '@/assets/data/api-data';

// this is a service file that is used to make API calls
export function getBanners() {
  // return httpClient.get({
  //   url: '/banner',
  // });
  return Promise.resolve({ banners });
}

export function getPopularAlbums(limit = 30) {
  // return httpClient.get({
  //   url: '/personalized',
  //   params: {
  //     limit,
  //   },
  // });
  return Promise.resolve({ result: popularAlbums.slice(0, limit) });
}

export function getNewAlbums() {
  // return httpClient.get({
  //   url: '/album/newest',
  // });
  return Promise.resolve({ albums: newAlbums });
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

export function getArtistsList(type: number, area: number, limit = 30) {
  // return httpClient.get({
  //   url: '/artist/list',
  //   params: {
  //     type,
  //     area,
  //     limit,
  //   },
  // });
  return Promise.resolve({ artists: artistsList.slice(0, limit) });
}
