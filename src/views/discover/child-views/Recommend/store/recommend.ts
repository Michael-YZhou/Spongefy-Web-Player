import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getBanners } from '../service/recommend';

// create an async thunk to fetch the banner data
export const fetchBannerDataAction = createAsyncThunk(
  'recommend/fetchBannerData',
  async () => {
    const res = await getBanners();
    console.log(res);
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
});

export default recommendSlice.reducer;
