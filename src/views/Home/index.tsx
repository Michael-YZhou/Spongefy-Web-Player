import { memo, Suspense } from 'react';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Navigation from '../../components/Navigation';

interface ILayout {
  children?: ReactNode;
  // TODO
}

const Layout: FC<ILayout> = () => {
  return (
    <div>
      {/* Navigation Bar */}
      <Navigation />
      {/* Render Routed Content Below */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Layout);
