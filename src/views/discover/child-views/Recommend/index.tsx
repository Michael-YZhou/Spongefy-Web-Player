import { memo, useEffect } from 'react';
import { FC, ReactNode } from 'react';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { fetchBannerDataAction } from './store/recommend';

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

  return <div>Recommend</div>;
};

export default memo(Recommend);
