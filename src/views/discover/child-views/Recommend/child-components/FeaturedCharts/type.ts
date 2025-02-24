export interface IFeaturedChartData {
  code: number;
  relatedVideos: any;
  playlist: Playlist;
  urls: any;
  privileges: Privilege[];
  sharedPrivilege: any;
  resEntrance: any;
  fromUsers: any;
  fromUserCount: number;
  songFromUsers: any;
}

interface Playlist {
  id: number;
  name: string;
  coverImgId: number;
  coverImgUrl: string;
  coverImgId_str: string;
  adType: number;
  userId: number;
  createTime: number;
  status: number;
  opRecommend: boolean;
  highQuality: boolean;
  newImported: boolean;
  updateTime: number;
  trackCount: number;
  specialType: number;
  privacy: number;
  trackUpdateTime: number;
  commentThreadId: string;
  playCount: number;
  trackNumberUpdateTime: number;
  subscribedCount: number;
  cloudTrackCount: number;
  ordered: boolean;
  description: string;
  tags: any[];
  updateFrequency: any;
  backgroundCoverId: number;
  backgroundCoverUrl: any;
  titleImage: number;
  titleImageUrl: any;
  detailPageTitle: any;
  englishTitle: any;
  officialPlaylistType: any;
  copied: boolean;
  relateResType: any;
  coverStatus: number;
  subscribers: Subscriber[];
  subscribed: boolean;
  creator: Creator;
  tracks: Track[];
  videoIds: any;
  videos: any;
  trackIds: TrackId[];
  bannedTrackIds: any;
  mvResourceInfos: any;
  shareCount: number;
  commentCount: number;
  remixVideo: any;
  newDetailPageRemixVideo: any;
  sharedUsers: any;
  historySharedUsers: any;
  gradeStatus: string;
  score: any;
  algTags: any;
  distributeTags: any[];
  trialMode: number;
  displayTags: any;
  displayUserInfoAsTagOnly: boolean;
  playlistType: string;
  bizExtInfo: BizExtInfo;
  ToplistType: string;
}

interface Subscriber {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: any;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

interface Creator {
  defaultAvatar: boolean;
  province: number;
  authStatus: number;
  followed: boolean;
  avatarUrl: string;
  accountStatus: number;
  gender: number;
  city: number;
  birthday: number;
  userId: number;
  userType: number;
  nickname: string;
  signature: string;
  description: string;
  detailDescription: string;
  avatarImgId: number;
  backgroundImgId: number;
  backgroundUrl: string;
  authority: number;
  mutual: boolean;
  expertTags: any;
  experts: any;
  djStatus: number;
  vipType: number;
  remarkName: any;
  authenticationTypes: number;
  avatarDetail: AvatarDetail;
  avatarImgIdStr: string;
  backgroundImgIdStr: string;
  anchor: boolean;
  avatarImgId_str: string;
}

interface AvatarDetail {
  userType: number;
  identityLevel: number;
  identityIconUrl: string;
}

interface Track {
  name: string;
  id: number;
  pst: number;
  t: number;
  ar: Ar[];
  alia: string[];
  pop: number;
  st: number;
  rt?: string;
  fee: number;
  v: number;
  crbt: any;
  cf: string;
  al: Al;
  dt: number;
  h: H;
  m: M;
  l: L;
  sq?: Sq;
  hr?: Hr;
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
  originSongSimpleData?: OriginSongSimpleData;
  tagPicList: any;
  resourceState: boolean;
  version: number;
  songJumpInfo: any;
  entertainmentTags: any;
  awardTags: any;
  single: number;
  noCopyrightRcmd: any;
  alg: any;
  displayReason: any;
  rtype: number;
  rurl: any;
  mst: number;
  cp: number;
  mv: number;
  publishTime: number;
  tns?: string[];
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
  tns: string[];
  pic_str: string;
  pic: number;
}

interface H {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface M {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface L {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface Sq {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface Hr {
  br: number;
  fid: number;
  size: number;
  vd: number;
}

interface OriginSongSimpleData {
  songId: number;
  name: string;
  artists: Artist[];
  albumMeta: AlbumMeta;
}

interface Artist {
  id: number;
  name: string;
}

interface AlbumMeta {
  id: number;
  name: string;
}

interface TrackId {
  id: number;
  v: number;
  t: number;
  at: number;
  alg: any;
  uid: number;
  rcmdReason: string;
  rcmdReasonTitle: string;
  sc: any;
  f: any;
  sr: any;
  dpr: any;
  ratio: number;
  lr?: number;
}

interface BizExtInfo {}

interface Privilege {
  id: number;
  fee: number;
  payed: number;
  realPayed: number;
  st: number;
  pl: number;
  dl: number;
  sp: number;
  cp: number;
  subp: number;
  cs: boolean;
  maxbr: number;
  fl: number;
  pc: any;
  toast: boolean;
  flag: number;
  paidBigBang: boolean;
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
  freeTrialPrivilege: FreeTrialPrivilege;
  rightSource: number;
  chargeInfoList: ChargeInfoList[];
  code: number;
  message: any;
  plLevels: any;
  dlLevels: any;
}

interface FreeTrialPrivilege {
  resConsumable: boolean;
  userConsumable: boolean;
  listenType: number;
  cannotListenReason: number;
  playReason: any;
  freeLimitTagType: any;
}

interface ChargeInfoList {
  rate: number;
  chargeUrl: any;
  chargeMessage: any;
  chargeType: number;
}
