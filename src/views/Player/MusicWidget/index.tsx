import { memo, useEffect, useState, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Slider } from 'antd';
import {
  MusicWidgetWrapper,
  WidgetPlayControl,
  WidgetOperator,
  WidgetPlayInfo,
} from './style';
import { useAppSelector } from '@/hooks/useAppSelector';
import { formatImageSize, formatTime } from '@/utils/format';
import { getSongPlayUrl } from '@/utils/playerUtils';

interface IProps {
  children?: ReactNode;
  // TODO
}

const MusicWidget: FC<IProps> = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const { currentSong } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
    }),
    shallowEqual,
  );

  useEffect(() => {
    // set music url when currentSong changes
    audioRef.current!.src = getSongPlayUrl(currentSong.id);
    // play music when currentSong changes
    audioRef.current
      ?.play()
      .then(() => {
        setIsPlaying(true);
        console.log('Music is playing');
      })
      .catch((err) => {
        setIsPlaying(false);
        console.log('music play failed', err);
      });

    // set song duration
    setDuration(currentSong.dt);
  }, [currentSong]);

  // handle progress bar status
  function handleTimeUpdate() {
    if (audioRef.current) {
      const currentTime = audioRef.current.currentTime * 1000; // convert to ms
      const progress = (currentTime / duration) * 100;
      setProgress(progress);
      // set current time
      setCurrentTime(currentTime);
    }
  }

  function handlePlayBtnClick() {
    // play or pause music
    if (isPlaying) {
      audioRef.current?.pause();
    } else {
      audioRef.current?.play().catch(() => {
        setIsPlaying(false);
      });
    }
    // toggle play state
    setIsPlaying(!isPlaying);
  }

  return (
    <MusicWidgetWrapper className="sprite_playbar">
      <div className="content wrap-v2">
        <WidgetPlayControl $isPlaying={isPlaying}>
          <button className="btn sprite_playbar prev"></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
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
              {/* antd Slider component */}
              <Slider
                value={progress}
                step={0.2}
                tooltip={{ formatter: null }}
              />
              <div className="time">
                <span className="current">{formatTime(currentTime)}</span>
                <span className="divider">/</span>
                <span className="duration">{formatTime(duration)}</span>
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
      <audio ref={audioRef} onTimeUpdate={handleTimeUpdate} />
    </MusicWidgetWrapper>
  );
};

export default memo(MusicWidget);
