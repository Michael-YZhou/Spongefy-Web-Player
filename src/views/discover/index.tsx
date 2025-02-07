import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';

interface IDiscover {
  children?: ReactNode;
  // TODO
}

const Discover: FC<IDiscover> = () => {
  return (
    <div>
      <div>Navigation</div>
      <Outlet />
    </div>
  );
};

export default memo(Discover);
