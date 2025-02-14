import { memo, useEffect, useState } from 'react';
import { FC, ReactNode } from 'react';
import { HttpService } from '@/services';

interface IRecommend {
  children?: ReactNode;
  // TODO
}

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

export interface IBannerResponse {
  banners: IBannerData[];
  code: number;
}

const Recommend: FC<IRecommend> = () => {
  const [banners, setBanners] = useState<IBannerData[]>([]);

  useEffect(() => {
    HttpService.httpClient
      .get<IBannerResponse>({
        url: '/banner',
        showLoading: false,
        interceptors: {
          requestInterceptor: (config) => {
            // For example, add a custom header only for this request:
            console.log('Per-request request interceptor - Success:', config);
            console.log(config.url);
            return config;
          },
          responseInterceptor: (res) => {
            // For example, log the response or modify it before returning:
            console.log('Per-request response interceptor - Success:', res);
            return res;
          },
        },
      })
      .then((res) => {
        setBanners(res.banners);
      });
  }, []);

  return (
    <div>
      {banners.map((banner, index) => {
        return <div key={index}>{banner.imageUrl}</div>;
      })}
    </div>
  );
};

export default memo(Recommend);
