import { memo, Suspense } from 'react';
import type { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './child-components/nav-bar';

interface IDiscover {
  children?: ReactNode;
  // TODO
}

const Discover: FC<IDiscover> = () => {
  return (
    <div>
      <NavBar />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Discover);
