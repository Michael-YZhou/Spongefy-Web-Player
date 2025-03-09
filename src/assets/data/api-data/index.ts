// Note: API data for development
// This is the data that is used to simulate the API response during development.
import bannerData from './api-banner.json';
import popularAlbumsData from './api-personalized.json';
import newAlbumsData from './api-album-newest.json';
import hotChartData from './api-playlist-detail-id-19723756.json';
import newSongData from './api-playlist-detail-id-3779629.json';
import originalData from './api-playlist-detail-id-2884035.json';
import artistsListData from './api-artist-list.json';
import podcastsListData from './api-program-recommend.json';
import songDetailData01 from './api-song-detail-ids-2645585433.json';
import songDetailData02 from './api-song-detail-ids-2644225034.json';
import songDetailData03 from './api-song-detail-ids-38592976.json';
import lyricData01 from './api-lyric-id-2645585433.json';
import lyricData02 from './api-lyric-id-2644225034.json';
import lyricData03 from './api-lyric-id-38592976.json';

// Types for the data
import type {
  IBannerData,
  IPopularAlbumData,
  INewAlbumData,
  IFeaturedChartData,
  IArtist,
  IPodcast,
} from '@/views/Discover/child-views/Recommend/type';

import type { ISong, ILyricData } from '@/views/Player/type';

// Export the data for the recommend page
export const banners: IBannerData[] = bannerData.banners;
export const popularAlbums: IPopularAlbumData[] = popularAlbumsData.result;
export const newAlbums: INewAlbumData[] = newAlbumsData.albums;
export const featuredCharts: IFeaturedChartData[] = [
  hotChartData,
  newSongData,
  originalData,
];
export const artistsList: IArtist[] = artistsListData.artists;
export const podcastsList: IPodcast[] = podcastsListData.programs;
export const songDetail01: ISong = songDetailData01.songs[0];
export const songDetail02: ISong = songDetailData02.songs[0];
export const songDetail03: ISong = songDetailData03.songs[0];
export const lyric01: ILyricData = lyricData01;
export const lyric02: ILyricData = lyricData02;
export const lyric03: ILyricData = lyricData03;
