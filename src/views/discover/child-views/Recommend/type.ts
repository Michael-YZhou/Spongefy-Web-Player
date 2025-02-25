/*
 * ****************************** Banner Section ******************************
 */
export interface IBannerData {
  imageUrl: string;
  targetId: number;
  targetType: number;
  titleColor: string;
  typeTitle: string;
  url: any;
  exclusive: boolean;
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

interface Artist {
  name: string;
  id: number;
  picId: number;
  img1v1Id: number;
  briefDesc: string;
  picUrl: string;
  img1v1Url: string;
  albumSize: number;
  alias: string[];
  trans: string;
  musicSize: number;
  topicPerson: number;
  picId_str: string;
  img1v1Id_str: string;
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
  img1v1Id_str: string;
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
  artist: Artist;
  songs: any;
  alias: any[];
  status: number;
  copyrightId: number;
  commentThreadId: string;
  artists: Artist2[];
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
  privileges: Privilege[];
  sharedPrivilege: any;
  resEntrance: any;
  fromUsers: any;
  fromUserCount: number;
  songFromUsers: any;
}

// can't find the type definition for IPlaylist and Privilege from the return data of the API
// so I just define them here as any
export interface IPlaylist {
  [key: string]: any;
}

interface Privilege {
  [key: string]: any;
}
