import { memo, Suspense } from 'react';
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
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
