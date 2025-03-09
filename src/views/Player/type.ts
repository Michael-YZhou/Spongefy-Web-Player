/*
 * ********************** Current song section **********************
 */
export interface ISongDetail {
  songs: ISong[];
  privileges: Privilege[];
  code: number;
}

export interface ISong {
  [key: string]: any;
}

interface Privilege {
  [key: string]: any;
}

/*
 * ********************** Current lyrics section **********************
 */

export interface ILyricLine {
  time: number;
  text: string;
}

export interface ILyricData {
  sgc: boolean;
  sfy: boolean;
  qfy: boolean;
  transUser?: TransUser;
  lyricUser?: LyricUser;
  lrc: ILrc;
  klyric: Klyric;
  tlyric: Tlyric;
  romalrc: Romalrc;
  code: number;
}

export interface TransUser {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface LyricUser {
  id: number;
  status: number;
  demand: number;
  userid: number;
  nickname: string;
  uptime: number;
}

export interface ILrc {
  version: number;
  lyric: string;
}

export interface Klyric {
  version: number;
  lyric: string;
}

export interface Tlyric {
  version: number;
  lyric: string;
}

export interface Romalrc {
  version: number;
  lyric: string;
}

/*
 * ********************** Play mode section **********************
 */

// 0: repeat all, 1: repeat one, 2: shuffle
export type PlayMode = 0 | 1 | 2;
