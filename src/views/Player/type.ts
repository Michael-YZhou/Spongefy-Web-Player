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

export interface ILyric {
  sgc: boolean;
  sfy: boolean;
  qfy: boolean;
  lrc: ILrc;
  klyric: Klyric;
  tlyric: Tlyric;
  romalrc: Romalrc;
  code: number;
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
