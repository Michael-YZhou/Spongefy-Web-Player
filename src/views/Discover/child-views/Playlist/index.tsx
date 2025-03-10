import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IPlaylist {
  children?: ReactNode;
  // TODO
}

const Playlist: FC<IPlaylist> = () => {
  return <div>Playlist</div>;
};

export default memo(Playlist);
