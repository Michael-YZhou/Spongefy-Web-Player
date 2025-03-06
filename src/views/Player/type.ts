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

/*
 * ********************** Play mode section **********************
 */

// 0: repeat all, 1: repeat one, 2: shuffle
export type PlayMode = 0 | 1 | 2;
