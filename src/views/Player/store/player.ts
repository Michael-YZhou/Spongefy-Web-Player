import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ISong, ILyricLine } from '@/views/Player/type';
import { getSongDetail, getSongLyric } from '../service/player';
import { parseLyric } from '@/utils/parse-lyric';

import { songDetail } from '@/assets/data/api-data'; // replace this later with your api data

// fetch current song information
export const fetchCurrentSongAction = createAsyncThunk(
  'player/fetchCurrentSong',
  async (id: number) => {
    const response = await getSongDetail(id);
    if (!response.songs.length) return;
    return response.songs[0];
  },
);

// fetch current song lyric
export const fetchCurrentLyricAction = createAsyncThunk(
  'player/fetchCurrentLyric',
  async (id: number) => {
    // get lyric string
    const response = await getSongLyric(id);
    const lyricString = response.lrc.lyric;

    // parse lyric string
    const lyricLines = parseLyric(lyricString);
    return lyricLines;
  },
);

interface IPlayerState {
  currentSong: ISong;
  currentLyric: ILyricLine[];
}

const initialState: IPlayerState = {
  currentSong: {},
  currentLyric: [],
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetch current song information
      .addCase(fetchCurrentSongAction.pending, (state, action) => {
        console.log('fetch Current Song pending');
      })
      .addCase(fetchCurrentSongAction.fulfilled, (state, action) => {
        console.log('fetch Current Song fulfilled');
        state.currentSong = action.payload;
      })
      .addCase(fetchCurrentSongAction.rejected, (state, action) => {
        console.log('fetch Current Song rejected');
      })
      .addCase(fetchCurrentLyricAction.pending, (state, action) => {
        console.log('fetch Current Lyric pending');
      })
      .addCase(fetchCurrentLyricAction.fulfilled, (state, action) => {
        console.log('fetch Current Lyric fulfilled');
        state.currentLyric = action.payload;
      })
      .addCase(fetchCurrentLyricAction.rejected, (state, action) => {
        console.log('fetch Current Lyric rejected');
      });
  },
});

export default playerSlice.reducer;
