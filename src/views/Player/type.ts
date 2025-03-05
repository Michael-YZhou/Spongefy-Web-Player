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
