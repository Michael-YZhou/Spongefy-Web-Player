/*
 * ****************************** Banner Section ******************************
 */
export interface IBannerData {
  imageUrl: string;
  targetId: number;
  adid: any;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url?: string | null;
  exclusive: boolean;
  monitorImpress: any;
  monitorClick: any;
  monitorType: any;
  monitorImpressList: any;
  monitorClickList: any;
  monitorBlackList: any;
  extMonitor: any;
  extMonitorInfo: any;
  adSource: any;
  adLocation: any;
  adDispatchJson: any;
  encodeId: string;
  program: any;
  event: any;
  video: any;
  song: any;
  scm: string;
  bannerBizType: string;
}

/*
 * ****************************** Popular Albums Section ******************************
 */
export interface IPopularAlbumData {
  id: number;
  type: number;
  name: string;
  copywriter: string;
  picUrl: string;
  canDislike: boolean;
  trackNumberUpdateTime: number;
  playCount: number;
  trackCount: number;
  highQuality: boolean;
  alg: string;
}

/*
 * ****************************** New Albums Section ******************************
 */

export interface INewAlbumData {
  name: string;
  id: number;
  type: string;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: string;
  briefDesc: string;
  artist: any;
  songs: any;
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: any[];
  paid: boolean;
  onSale: boolean;
  picId_str: string;
}

/*
 * ****************************** Featured Section ******************************
 */
export interface IFeaturedChartData {
  code: number;
  relatedVideos: any;
  playlist: IPlaylist;
  urls: any;
  privileges: any[];
  sharedPrivilege: any;
  resEntrance: any;
  fromUsers: any;
  fromUserCount: number;
  songFromUsers: any;
}

export interface IPlaylist {
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
  subscribers: any[];
  subscribed: boolean;
  creator: any;
  tracks: Track[];
  videoIds: any;
  videos: any;
  trackIds: any[];
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
  bizExtInfo: any;
  ToplistType: string;
}

interface Track {
  name: string;
  id: number;
  pst: number;
  t?: any;
  ar?: any[];
  alia: string[];
  pop: number;
  st?: any;
  rt?: any;
  fee: number;
  v?: any;
  crbt: any;
  cf?: any;
  al?: any;
  dt?: any;
  h?: any;
  m?: any;
  l?: any;
  sq?: any;
  hr?: any;
  a?: any;
  cd?: string;
  no?: number;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  djId: number;
  copyright: number;
  s_id: number;
  mark: number;
  originCoverType: number;
  originSongSimpleData?: any;
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

/*
 * ****************************** Artists List Section ******************************
 */

export interface IArtistsListData {
  artists: IArtist[];
  more: boolean;
  code: number;
}

export interface IArtist {
  accountId?: number;
  albumSize: number;
  alias: string[];
  briefDesc: string;
  fansCount: number;
  followed: boolean;
  id: number;
  img1v1Id: number;
  img1v1Id_str: string;
  img1v1Url: string;
  musicSize: number;
  name: string;
  picId: number;
  picId_str: string;
  picUrl: string;
  topicPerson: number;
  trans: string;
  transNames?: string[];
}

/*
 * ****************************** Podcasts List Section ******************************
 */

export interface IPodcastsListData {
  programs: IPodcast[];
  name: string;
  more: boolean;
  code: number;
}

export interface IPodcast {
  mainSong: MainSong;
  songs: any;
  dj: Dj;
  participateAnchors: any;
  programGuests: any;
  blurCoverUrl: string;
  radio: Radio;
  duration: number;
  authDTO: any;
  buyed: boolean;
  programDesc: any;
  h5Links: any;
  canReward: boolean;
  auditStatus: number;
  videoInfo: any;
  score: number;
  liveInfo: any;
  alg: string;
  ctrp: any;
  themeType: any;
  disPlayStatus: any;
  auditDisPlayStatus: number;
  categoryName: any;
  secondCategoryName: any;
  existLyric: boolean;
  djPlayRecordVo: any;
  recommended: boolean;
  icon: any;
  additionIconList: any;
  adIconInfo: any;
  replaceVoiceId: number;
  replaceResource: any;
  songTimeStamps: any;
  classicRelationSong: any;
  classicStyleInfo: any;
  specialTags: any;
  seqNo: any;
  commonModule: any;
  feeScope: number;
  programFeeType: number;
  mainTrackId: number;
  titbits: any;
  channels: string[];
  categoryId: number;
  listenerCount: number;
  commentThreadId: string;
  scheduledPublishTime: number;
  createEventId: number;
  serialNum: number;
  coverId: number;
  secondCategoryId: number;
  coverUrl: string;
  smallLanguageAuditStatus: number;
  bdAuditStatus: number;
  pubStatus: number;
  reward: boolean;
  subscribedCount: number;
  privacy: boolean;
  titbitImages: any;
  trackCount: number;
  isPublish: boolean;
  description: string;
  createTime: number;
  name: string;
  id: number;
  reason: string;
  subscribed: boolean;
  shareCount: number;
  likedCount: number;
  commentCount: number;
}

interface MainSong {
  name: string;
  id: number;
  position: number;
  alias: any[];
  status: number;
  fee: number;
  copyrightId: number;
  disc: string;
  no: number;
  artists: Artist[];
  album: Album;
  starred: boolean;
  popularity: number;
  score: number;
  starredNum: number;
  duration: number;
  playedNum: number;
  dayPlays: number;
  hearTime: number;
  ringtone: any;
  crbt: any;
  audition: any;
  copyFrom: string;
  commentThreadId: string;
  rtUrl: any;
  ftype: number;
  rtUrls: any[];
  copyright: number;
  transName: any;
  sign: any;
  mark: number;
  noCopyrightRcmd: any;
  hMusic?: any;
  mMusic?: any;
  lMusic: any;
  rtype: number;
  rurl: any;
  mvid: number;
  bMusic: any;
  mp3Url: any;
}

interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

interface Album {
  name: string;
  id: number;
  type: any;
  size: number;
  picId: number;
  blurPicUrl: string;
  companyId: number;
  pic: number;
  picUrl: string;
  publishTime: number;
  description: string;
  tags: string;
  company: any;
  briefDesc: string;
  artist: Artist2;
  songs: any[];
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist3[];
  subType: any;
  transName: any;
  mark: number;
  picId_str: string;
}

interface Artist2 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

interface Artist3 {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: any[];
  trans: string;
  musicSize: number;
  topicPerson: number;
}

interface Dj {
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
  avatarImgId_str?: string;
  brand: string;
}

interface Radio {
  dj: any;
  category: string;
  secondCategory: string;
  buyed: boolean;
  price: number;
  originalPrice: number;
  discountPrice: any;
  purchaseCount: number;
  lastProgramName: any;
  videos: any;
  finished: boolean;
  underShelf: boolean;
  liveInfo: any;
  playCount: number;
  privacy: boolean;
  icon: any;
  manualTagsDTO: any;
  descPicList?: any;
  replaceRadioId: number;
  replaceRadio: any;
  shortName: any;
  picUrl: string;
  feeScope: number;
  lastProgramId: number;
  picId: number;
  categoryId: number;
  taskId: number;
  programCount: number;
  subCount: number;
  participateUidList: number[];
  operateUidList: number[];
  lastProgramCreateTime: number;
  radioFeeType: number;
  intervenePicUrl: string;
  intervenePicId: number;
  dynamic: boolean;
  desc: string;
  createTime: number;
  name: string;
  id: number;
  subed: boolean;
}
