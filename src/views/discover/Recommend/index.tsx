import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IRecommend {
  children?: ReactNode;
  // TODO
}

const Recommend: FC<IRecommend> = () => {
  return <div>Recommend</div>;
};

export default memo(Recommend);
