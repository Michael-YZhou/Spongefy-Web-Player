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
