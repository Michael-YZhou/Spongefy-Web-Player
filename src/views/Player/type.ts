export interface ISongDetail {
  songs: ISong[];
  privileges: Privilege[];
  code: number;
}

export interface ISong {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: any[];
  pop: number;
  st: number;
  rt: string;
  fee: number;
  v: number;
  crbt: any;
  cf: string;
  al: Al;
  dt: number;
  h: any;
  m: any;
  l: any;
  sq: any;
  hr: any;
  a: any;
  cd: string;
  no: number;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData: any;
  tagPicList: any;
  resourceState: boolean;
  version: number;
  songJumpInfo: any;
  entertainmentTags: any;
  awardTags: any;
  displayTags: any;
  single: number;
  noCopyrightRcmd: any;
  rtype: number;
  rurl: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
}

interface Ar {
  id: number;
  name: string;
  tns: any[];
  alias: any[];
}

interface Al {
  id: number;
  name: string;
  picUrl: string;
  tns: any[];
  pic_str: string;
  pic: number;
}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  toast: boolean;
  flag: number;
  preSell: boolean;
  playMaxbr: number;
  downloadMaxbr: number;
  maxBrLevel: string;
  playMaxBrLevel: string;
  downloadMaxBrLevel: string;
  plLevel: string;
  dlLevel: string;
  flLevel: string;
  rscl: any;
  freeTrialPrivilege: any;
  rightSource: number;
  chargeInfoList: any[];
  code: number;
  message: any;
}
