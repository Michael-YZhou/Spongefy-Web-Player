import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import type { IPopularAlbumData } from '@/views/Temp-Discover/child-views/Recommend/type';
import { PlayListItemWrapper } from './style';
import { formatCount, formatImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  itemData: IPopularAlbumData;
  // TODO
}

const PlayListItem: FC<IProps> = (props) => {
  const { itemData } = props;

  return (
    <PlayListItemWrapper>
      <div className="cover-top">
        <img src={formatImageSize(itemData.picUrl, 140)} alt={itemData.name} />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon headset"></i>
              <span className="count">{formatCount(itemData.playCount)}</span>
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
