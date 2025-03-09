import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { FeaturedChartsItemWrapper } from './style';
import { IPlaylist } from '../../type';
import { formatImageSize } from '@/utils/format';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { fetchCurrentSongAction } from '@/views/Player/store/player';
import {
  PlayCircleOutlined,
  PlusOutlined,
  FolderAddOutlined,
} from '@ant-design/icons';

interface IProps {
  children?: ReactNode;
  itemData: IPlaylist;
}

const FeaturedChartsItem: FC<IProps> = (props) => {
  const { itemData } = props;
  const { tracks = [] } = itemData;

  const dispatch = useAppDispatch();

  const handlePlayClick = (id: number) => {
    dispatch(fetchCurrentSongAction(id));
  };

  return (
    <FeaturedChartsItemWrapper>
      <div className="header">
        <div className="image">
          <img
            src={formatImageSize(itemData.coverImgUrl, 80)}
            alt={itemData.name}
          />
          <a href="" className="sprite_cover"></a>
        </div>
        <div className="info">
          <div className="name">{itemData.name}</div>
          <div>
            {/* <button className="sprite_02 btn play"></button>
            <button className="sprite_02 btn favor"></button> */}
            <PlayCircleOutlined className="btn play" />
            <FolderAddOutlined className="btn favor" />
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <div className="name">{item.name}</div>
                <div className="operator">
                  {/* <button
                    className="btn sprite_02 play"
                    onClick={() => {
                      handlePlayClick(item.id);
                    }}
                  ></button>
                  <button className="btn sprite_icon2 add"></button>
                  <button className="btn sprite_02 favor"></button> */}
                  <PlayCircleOutlined
                    className="btn play"
                    onClick={() => {
                      handlePlayClick(item.id);
                    }}
                  />
                  <PlusOutlined
                    className="btn add"
                    onClick={() => {
                      handlePlayClick(item.id);
                    }}
                  />
                  <FolderAddOutlined
                    className="btn favor"
                    onClick={() => {
                      handlePlayClick(item.id);
                    }}
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="footer">
        <Link to={`/discover/ranking`}>show more &gt;</Link>
      </div>
    </FeaturedChartsItemWrapper>
  );
};

export default memo(FeaturedChartsItem);
