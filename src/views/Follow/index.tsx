import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IFollow {
  children?: ReactNode;
  // TODO
}

const Follow: FC<IFollow> = () => {
  return <div>Follow</div>;
};

export default memo(Follow);
