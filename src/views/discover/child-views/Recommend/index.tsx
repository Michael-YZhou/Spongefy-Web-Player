import { memo, useEffect } from 'react';
import type { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispach';
import TopBanner from './child-components/TopBanner';
import { RecommendWrapper } from './style';
import Popular from './child-components/Popular';
import NewAlbums from './child-components/NewAlbums';
import {
  fetchBannerDataAction,
  fetchPopularAlbumsAction,
  fetchNewAlbumsAction,
  fetchFeaturedChartsAction,
} from './store/recommend';
import FeaturedCharts from './child-components/FeaturedCharts';
import Login from './child-components/Login';

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
    dispatch(fetchNewAlbumsAction());
    dispatch(fetchFeaturedChartsAction());
  }, []);

  return (
    <RecommendWrapper>
      <TopBanner />
      <div className="content wrap-v2">
        <div className="left">
          <Popular />
          <NewAlbums />
          <FeaturedCharts />
        </div>
        <div className="right">
          <Login />
          <div>For Artists</div>
          <div>Popular Podcaster</div>
        </div>
      </div>
    </RecommendWrapper>
  );
};

export default memo(Recommend);
