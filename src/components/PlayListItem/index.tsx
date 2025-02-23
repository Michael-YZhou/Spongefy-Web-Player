import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import type { IAlbumData } from '@/views/Discover/child-views/Recommend/type';
import { PlayListItemWrapper } from './style';

interface IProps {
  children?: ReactNode;
  itemData: IAlbumData;
  // TODO
}

const PlayListItem: FC<IProps> = (props) => {
  const { itemData } = props;

  return (
    <PlayListItemWrapper>
      <div className="cover-top">
        <img src={itemData.picUrl} alt={itemData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{itemData.playCount}</span>
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-no-wrap">{itemData.name}</div>
    </PlayListItemWrapper>
  );
};

export default memo(PlayListItem);
