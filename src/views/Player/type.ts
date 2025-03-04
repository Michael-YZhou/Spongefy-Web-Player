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
