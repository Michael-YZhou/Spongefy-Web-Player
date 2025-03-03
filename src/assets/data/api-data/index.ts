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
import songDetailData from './api-song-detail-ids-25830169.json';

// Types for the data
import type {
  IBannerData,
  IPopularAlbumData,
  INewAlbumData,
  IFeaturedChartData,
  IArtist,
  IPodcast,
} from '@/views/Discover/child-views/Recommend/type';

import type { ISong } from '@/views/Player/type';

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
export const songDetail: ISong = songDetailData.songs[0];
