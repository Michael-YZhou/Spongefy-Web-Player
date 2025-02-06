import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IDiscover {
  children?: ReactNode;
  // TODO
}

const Discover: FC<IDiscover> = () => {
  return <div>Discover</div>;
};

export default memo(Discover);
