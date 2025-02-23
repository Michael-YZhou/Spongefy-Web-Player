import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { NewAlbumsWrapper } from './style';
import SectionHeaderV1 from '@/components/SectionHeaderV1';

interface IProps {
  children?: ReactNode;
  // TODO
}

const NewAlbums: FC<IProps> = () => {
  return (
    <NewAlbumsWrapper>
      <SectionHeaderV1 title="New Albums" moreLink="/discover/album" />
      <div className="new-albums-content">
        <button className="sprite_02 arrow arrow-left"></button>
        <button className="sprite_02 arrow arrow-right"></button>
      </div>
    </NewAlbumsWrapper>
  );
};

export default memo(NewAlbums);
