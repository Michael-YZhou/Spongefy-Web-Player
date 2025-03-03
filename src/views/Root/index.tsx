import { memo, Suspense, FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../../components/Footer';
import MusicWidget from '../Player/MusicWidget';

interface IRoot {
  children?: ReactNode;
  // TODO
}

const Root: FC<IRoot> = () => {
  return (
    <div>
      <Header />
      <Suspense fallback="">
        <Outlet />
      </Suspense>
      <Footer />

      {/* Music Widget */}
      <MusicWidget />
    </div>
  );
};

export default memo(Root);
