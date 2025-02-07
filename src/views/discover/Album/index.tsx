import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IAlbum {
  children?: ReactNode;
  // TODO
}

const Album: FC<IAlbum> = () => {
  return <div>Album</div>;
};

export default memo(Album);
