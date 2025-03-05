import { createSlice } from '@reduxjs/toolkit';
import { createAsyncThunk } from '@reduxjs/toolkit';
import type { ISong, ILyricLine } from '@/views/Player/type';
import { getSongDetail, getSongLyric } from '../service/player';
import { parseLyric } from '@/utils/parse-lyric';

import { songDetail01 } from '@/assets/data/api-data'; // replace this later with your api data
import { songDetail02 } from '@/assets/data/api-data'; // replace this later with your api data

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
    // console.log(lyricLines);
    return lyricLines;
  },
);

interface IPlayerState {
  currentSong: ISong;
  lyrics: ILyricLine[];
  lyricIndex: number;
  playSongList: ISong[];
  playSongIndex: number;
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [songDetail01, songDetail02],
  playSongIndex: -1,
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
  },
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
        state.lyrics = action.payload;
      })
      .addCase(fetchCurrentLyricAction.rejected, (state, action) => {
        console.log('fetch Current Lyric rejected');
      });
  },
});

export const { changeLyricIndexAction } = playerSlice.actions;
export default playerSlice.reducer;
