import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type {
  IBannerData,
  IPopularAlbumData,
  INewAlbumData,
  IPlaylist,
  IArtist,
} from '../type';
import {
  getBanners,
  getPopularAlbums,
  getNewAlbums,
  getPlayListDetail,
  getArtistsList,
} from '../service/recommend';

// create an async thunk to fetch the banner data
export const fetchBannerDataAction = createAsyncThunk(
  'recommend/fetchBannerData',
  async (arg, { dispatch }) => {
    const res = await getBanners();
    return res.banners;
  },
);

export const fetchPopularAlbumsAction = createAsyncThunk(
  'recommend/fetchPopularAlbums',
  async (arg, { dispatch }) => {
    const res = await getPopularAlbums(8);
    return res.result;
  },
);

export const fetchNewAlbumsAction = createAsyncThunk(
  'recommend/fetchNewAlbums',
  async (arg, { dispatch }) => {
    const res = await getNewAlbums();
    return res.albums;
  },
);

const chartIds = [19723756, 3779629, 2884035];
export const fetchFeaturedChartsAction = createAsyncThunk(
  'recommend/fetchFeaturedCharts',
  async (arg, { dispatch }) => {
    // promise.all to fetch all the featured charts with correct order
    const playlists = await Promise.all(
      chartIds.map((id) => getPlayListDetail(id).then((res) => res!.playlist)),
    );
    return playlists; // This array will be the payload in fulfilled
  },
);

export const fetchArtistsListAction = createAsyncThunk(
  'recommend/fetchArtistsList',
  async (arg, { dispatch }) => {
    const res = await getArtistsList(-1, 96, 5);
    return res.artists;
  },
);

// define the recommend state data structure
interface IRecommendState {
  banners: IBannerData[];
  popularAlbums: IPopularAlbumData[];
  newAlbums: INewAlbumData[];
  featuredCharts: IPlaylist[];
  artistsList: IArtist[];
}

const initialState: IRecommendState = {
  banners: [],
  popularAlbums: [],
  newAlbums: [],
  featuredCharts: [],
  artistsList: [],
};

// create a slice to manage the recommend state
const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // handle the fetch banner data async thunk
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('fetching banner data pending...');
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
        console.log('fetch banner data fulfilled');
        state.banners = action.payload;
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('fetch banner data rejected');
      })
      // handle the fetch popular albums async thunk
      .addCase(fetchPopularAlbumsAction.pending, () => {
        console.log('fetching popular albums pending...');
      })
      .addCase(fetchPopularAlbumsAction.fulfilled, (state, action) => {
        console.log('fetch popular albums fulfilled');
        state.popularAlbums = action.payload;
      })
      .addCase(fetchPopularAlbumsAction.rejected, () => {
        console.log('fetch popular albums rejected');
      })
      // handle the fetch new albums async thunk
      .addCase(fetchNewAlbumsAction.pending, () => {
        console.log('fetching new albums pending...');
      })
      .addCase(fetchNewAlbumsAction.fulfilled, (state, action) => {
        console.log('fetch new albums fulfilled');
        state.newAlbums = action.payload;
      })
      .addCase(fetchNewAlbumsAction.rejected, () => {
        console.log('fetch new albums rejected');
      })
      // handle the fetch featured charts async thunk
      .addCase(fetchFeaturedChartsAction.pending, () => {
        console.log('fetching featured charts pending...');
      })
      .addCase(fetchFeaturedChartsAction.fulfilled, (state, action) => {
        console.log('fetch featured charts fulfilled');
        state.featuredCharts = action.payload;
      })
      .addCase(fetchFeaturedChartsAction.rejected, () => {
        console.log('fetch featured charts rejected');
      })
      // handle the fetch artists list async thunk
      .addCase(fetchArtistsListAction.pending, () => {
        console.log('fetching artists list pending...');
      })
      .addCase(fetchArtistsListAction.fulfilled, (state, action) => {
        console.log('fetch artists list fulfilled');
        state.artistsList = action.payload;
      })
      .addCase(fetchArtistsListAction.rejected, () => {
        console.log('fetch artists list rejected');
      });
  },
});

export default recommendSlice.reducer;
