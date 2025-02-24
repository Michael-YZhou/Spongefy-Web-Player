import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { IBannerData, IPopularAlbumData, INewAlbumData } from '../type';
import {
  getBanners,
  getPopularAlbums,
  getNewAlbums,
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

// define the recommend state data structure
interface IRecommendState {
  banners: IBannerData[];
  popularAlbums: IPopularAlbumData[];
  newAlbums: INewAlbumData[];
}

const initialState: IRecommendState = {
  banners: [],
  popularAlbums: [],
  newAlbums: [],
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
      });
  },
});

export default recommendSlice.reducer;
