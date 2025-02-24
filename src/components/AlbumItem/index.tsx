import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { AlbumItemWrapper } from './style';
import type { INewAlbumData } from '@/views/Discover/child-views/Recommend/type';
import { formatImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  itemData: INewAlbumData;
}

const AlbumItem: FC<IProps> = (props) => {
  const { itemData } = props;
  return (
    <AlbumItemWrapper>
      <div className="album-image">
        <img src={formatImageSize(itemData.picUrl, 100)} alt={itemData.name} />
        <a href="" className="sprite_cover cover"></a>
      </div>
      <div className="album-info">
        <div className="name">{itemData.name}</div>
        <div className="artist">{itemData.artist.name}</div>
      </div>
    </AlbumItemWrapper>
  );
};

export default memo(AlbumItem);
