import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ISong } from '@/views/Player/type';
import { getSongDetail } from '../service/player';

import { songDetail } from '@/assets/data/api-data'; // replace this later with your api data

// fetch current song information
export const fetchCurrentSongAction = createAsyncThunk(
  'player/fetchCurrentSong',
  async (ids: number) => {
    const response = await getSongDetail(ids);
    if (!response.songs.length) return;
    return response.songs[0];
  },
);

interface IPlayerState {
  currentSong: ISong;
}

const initialState: IPlayerState = {
  currentSong: {},
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCurrentSongAction.pending, (state, action) => {
        console.log('fetch Current Song pending');
      })
      .addCase(fetchCurrentSongAction.fulfilled, (state, action) => {
        console.log('fetch Current Song fulfilled');
        state.currentSong = action.payload;
      })
      .addCase(fetchCurrentSongAction.rejected, (state, action) => {
        console.log('fetch Current Song rejected');
      });
  },
});

export default playerSlice.reducer;
