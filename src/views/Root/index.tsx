import { memo, Suspense, FC, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from '../../components/Footer';
import MusicWidget from '../Player/MusicWidget';

import { useEffect } from 'react';
import {
  fetchCurrentSongAction,
  fetchCurrentLyricAction,
} from '@/views/Player/store/player';
import { useAppDispatch } from '@/hooks/useAppDispach';
interface IRoot {
  children?: ReactNode;
  // TODO
}

const Root: FC<IRoot> = () => {
  // fetch a song when app is mounted
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchCurrentSongAction(38592976));
    dispatch(fetchCurrentLyricAction(38592976));
  }, []);

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
