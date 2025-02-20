import { memo, useEffect } from 'react';
import { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { fetchBannerDataAction } from './store/recommend';
import TopBanner from './child-components/top-banner';

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
    <div>
      <TopBanner />
      Recommend
    </div>
  );
};

export default memo(Recommend);
