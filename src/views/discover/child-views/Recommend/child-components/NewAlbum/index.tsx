import { memo } from 'react';
import type { FC, ReactNode } from 'react';

interface IProps {
  children?: ReactNode;
  // TODO
}

const PopularAlbum: FC<IProps> = () => {
  return <div>PopularAlbum</div>;
};

export default memo(PopularAlbum);
