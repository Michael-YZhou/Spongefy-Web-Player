import { memo, Suspense } from 'react';
import { FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { homeRoute } from './routes';
import Navigation from '../../components/Navigation';

interface IHome {
  children?: ReactNode;
  // TODO
}

const Home: FC<IHome> = () => {
  const routes = homeRoute.children!;

  return (
    <div>
      {/* Navigation Bar */}
      <Navigation routes={routes} />
      {/* Render Routed Content Below */}
      <Suspense fallback="">
        <Outlet />
      </Suspense>
    </div>
  );
};

export default memo(Home);
