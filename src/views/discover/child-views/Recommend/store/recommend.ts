import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

// create an async thunk to fetch the banner data
export const fetchBannerDataAction = createAsyncThunk(
  'recommend/fetchBannerData',
  async () => {
    const res = await getBanners();
    return res.banners;
  },
);

interface IBannerData {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: any;
  exclusive: boolean;
  scm: string;
  bannerBizType: string;
}

interface IRecommendState {
  banners: IBannerData[];
}

const initialState: IRecommendState = {
  banners: [],
};

const recommendSlice = createSlice({
  name: 'recommend',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBannerDataAction.pending, () => {
        console.log('fetching banner data pending...');
      })
      .addCase(fetchBannerDataAction.fulfilled, (state, action) => {
        console.log('fetch banner data fulfilled');
        state.banners = action.payload;
      })
      .addCase(fetchBannerDataAction.rejected, () => {
        console.log('fetch banner data rejected');
      });
  },
});

export default recommendSlice.reducer;
