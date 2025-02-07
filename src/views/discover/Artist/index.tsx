import { memo } from 'react';
import { FC, ReactNode } from 'react';

interface IArtist {
  children?: ReactNode;
  // TODO
}

const Artist: FC<IArtist> = () => {
  return <div>Artist</div>;
};

export default memo(Artist);
