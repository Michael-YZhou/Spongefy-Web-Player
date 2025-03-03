import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import {
  MusicWidgetWrapper,
  WidgetPlayControl,
  WidgetOperator,
  WidgetPlayInfo,
} from './style';
import { useAppSelector } from '@/hooks/useAppSelector';
import { shallowEqual } from 'react-redux';
import { formatImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  // TODO
}

const MusicWidget: FC<IProps> = () => {
  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual,
  );

  return (
    <MusicWidgetWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <WidgetPlayControl>
          <button className="btn sprite_playbar prev"></button>
          <button className="btn sprite_playbar play"></button>
          <button className="btn sprite_playbar next"></button>
        </WidgetPlayControl>
        <WidgetPlayInfo>
          <Link to="/player">
            <img
              className="image"
              src={formatImageSize(currentSong?.al?.picUrl, 50)}
              alt=""
            ></img>
          </Link>
          <div className="info">
            <div className="song">
              <span className="song-name">{currentSong.name}</span>
              <span className="singer-name">{currentSong?.ar[0]?.name}</span>
            </div>
            <div className="progress">
              <Slider />
              <div className="time">
                <span className="current">00:52</span>
                <span className="divider">/</span>
                <span className="duration">04:35</span>
              </div>
            </div>
          </div>
        </WidgetPlayInfo>
        <WidgetOperator>
          <div className="left">
            <button className="btn icon_pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button className="btn sprite_playbar loop"></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </WidgetOperator>
      </div>
    </MusicWidgetWrapper>
  );
};

export default memo(MusicWidget);
