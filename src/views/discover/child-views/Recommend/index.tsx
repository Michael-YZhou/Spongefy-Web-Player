import { memo, useEffect } from 'react';
import { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './child-components/top-banner';
import { RecommendWrapper } from './style';

interface IRecommend {
  children?: ReactNode;
  // TODO
}

const Recommend: FC<IRecommend> = () => {
  const dispatch = useAppDispatch();

  /** dispatch action to fetch banner data */
  useEffect(() => {
    dispatch(fetchBannerDataAction());
  }, []);

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">left</div>
        <div className="right">right</div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
