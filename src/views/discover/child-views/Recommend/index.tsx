import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { fetchBannerDataAction } from './store/recommend';
import { fetchPopularAlbumsAction } from './store/recommend';
import TopBanner from './child-components/TopBanner';
import { RecommendWrapper } from './style';
import Popular from './child-components/Popular';

interface IRecommend {
  children?: ReactNode;
  // TODO
}

const Recommend: FC<IRecommend> = () => {
  const dispatch = useAppDispatch();

  /** dispatch action to fetch banner data */
  useEffect(() => {
    dispatch(fetchBannerDataAction());
    dispatch(fetchPopularAlbumsAction());
  }, []);

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <Popular />
          left
        </div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
