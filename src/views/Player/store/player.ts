import { createSlice } from '@reduxjs/toolkit';
import type { ISong } from '@/views/Player/type';

import { songDetail } from '@/assets/data/api-data'; // replace this with your api data

interface IPlayerState {
  currentSong: ISong;
}

const initialState: IPlayerState = {
  currentSong: songDetail,
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {},
});

export default playerSlice.reducer;
