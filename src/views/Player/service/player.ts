import { httpClient } from '@/services/http/HttpService';
import {
  songDetail01,
  songDetail02,
  songDetail03,
  lyric01,
  lyric02,
  lyric03,
} from '@/assets/data/api-data';

export function getSongDetail(ids: number) {
  // return httpClient.get({
  //   url: '/song/detail',
  //   params: {
  //     ids,
  //   },
  // });
  if (ids === 2645585433) {
    return Promise.resolve(songDetail01);
  } else if (ids === 2644225034) {
    return Promise.resolve(songDetail02);
  } else if (ids === 38592976) {
    return Promise.resolve(songDetail03);
  } else {
    return httpClient.get({
      url: '/song/detail',
      params: {
        ids,
      },
    });
  }
}

export function getSongLyric(id: number) {
  // return httpClient.get({
  //   url: '/lyric',
  //   params: {
  //     id,
  //   },
  // });
  if (id === 2645585433) {
    console.log(lyric01);
    return Promise.resolve(lyric01);
  } else if (id === 2644225034) {
    return Promise.resolve(lyric02);
  } else if (id === 38592976) {
    return Promise.resolve(lyric03);
  } else {
    return httpClient.get({
      url: '/lyric',
      params: {
        id,
      },
    });
  }
}
