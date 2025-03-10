import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { ISong, ILyricLine, PlayMode } from '@/views/Player/type';
import { getSongDetail, getSongLyric } from '../service/player';
import { parseLyric } from '@/utils/parse-lyric';
import type { RootStateType } from '@/store';

import {
  songDetail01,
  songDetail02,
  songDetail03,
} from '@/assets/data/api-data'; // replace this later with your api data

interface IThunkState {
  state: RootStateType;
}

// fetch current song information
export const fetchCurrentSongAction = createAsyncThunk<
  ISong,
  number,
  IThunkState // add the state type to the third argument
>('player/fetchCurrentSong', async (id: number, { dispatch, getState }) => {
  // check if the song is already in the playSongList before fetching it
  const playSongList = getState().player.playSongList; // get state from the second argument
  const playSongIndex = playSongList.findIndex((song) => song.id === id);
  // if the song is not in the playSongList maintained in redux store, fetch it from the server and return it
  if (playSongIndex === -1) {
    const response = await getSongDetail(id);
    if (!response.songs.length) return;

    // add the song to the playSongList
    const newPlaySongList = [...playSongList, response.songs[0]];
    dispatch(changePlaySongListAction(newPlaySongList));
    // update the playSongIndex to the last index
    dispatch(changePlaySongIndexAction(newPlaySongList.length - 1));
    // return the song
    return response.songs[0];
  } else {
    // if the song is in the playSongList, update the playSongIndex and return the song
    dispatch(changePlaySongIndexAction(playSongIndex));
    return playSongList[playSongIndex];
  }
});

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

export const changeMusicAction = createAsyncThunk<void, boolean, IThunkState>(
  'player/changeMusic',
  (isNext, { dispatch, getState }) => {
    // get the current player data
    const { playSongList, playSongIndex, playMode } = getState().player;

    // calculate the next index based on the play mode
    let nextIndex = playSongIndex;
    if (playMode === 2) {
      nextIndex = Math.floor(Math.random() * playSongList.length);
    } else {
      nextIndex = isNext
        ? (playSongIndex + 1) % playSongList.length // keep the index in the range of the playSongList
        : (playSongIndex - 1 + playSongList.length) % playSongList.length;
    }

    // get the next song from the playSongList using the nest index
    const nextSong = playSongList[nextIndex];
    dispatch(changeCurrentSongAction(nextSong));
    // update the playSongIndex
    dispatch(changePlaySongIndexAction(nextIndex));
    // fetch the lyric of the next song
    dispatch(fetchCurrentLyricAction(nextSong.id));
  },
);

interface IPlayerState {
  currentSong: ISong;
  lyrics: ILyricLine[];
  lyricIndex: number;
  playSongList: ISong[];
  playSongIndex: number;
  playMode: PlayMode;
}

const initialState: IPlayerState = {
  currentSong: {},
  lyrics: [],
  lyricIndex: -1,
  playSongList: [songDetail01, songDetail02, songDetail03],
  playSongIndex: -1,
  playMode: 0,
};

const playerSlice = createSlice({
  name: 'player',
  initialState: initialState,
  reducers: {
    // record the current song being played
    changeCurrentSongAction(state, { payload }) {
      state.currentSong = payload;
    },
    // record the index of the line of the lyric being played
    changeLyricIndexAction(state, { payload }) {
      state.lyricIndex = payload;
    },
    // record the index of the song being played
    changePlaySongIndexAction(state, { payload }) {
      state.playSongIndex = payload;
    },
    // update the playSongList
    changePlaySongListAction(state, { payload }) {
      state.playSongList = payload;
    },
    // change the play mode
    changePlayModeAction(state, { payload }) {
      state.playMode = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      // fetch current song information
      .addCase(fetchCurrentSongAction.pending, (_state, _action) => {
        console.log('fetch Current Song pending');
      })
      .addCase(fetchCurrentSongAction.fulfilled, (state, action) => {
        console.log('fetch Current Song fulfilled');
        state.currentSong = action.payload;
      })
      .addCase(fetchCurrentSongAction.rejected, (_state, _action) => {
        console.log('fetch Current Song rejected');
      })
      .addCase(fetchCurrentLyricAction.pending, (_state, _action) => {
        console.log('fetch Current Lyric pending');
      })
      .addCase(fetchCurrentLyricAction.fulfilled, (state, action) => {
        console.log('fetch Current Lyric fulfilled');
        state.lyrics = action.payload;
      })
      .addCase(fetchCurrentLyricAction.rejected, (_state, _action) => {
        console.log('fetch Current Lyric rejected');
      });
  },
});

// export actions
export const {
  changeCurrentSongAction,
  changeLyricIndexAction,
  changePlaySongIndexAction,
  changePlaySongListAction,
  changePlayModeAction,
} = playerSlice.actions;

// export reducer to register in global store
export default playerSlice.reducer;
