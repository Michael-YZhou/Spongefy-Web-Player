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
  const [isSliding, setIsSliding] = useState(false);
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
      // get current time of audio element
      const currentTime = audioRef.current.currentTime * 1000; // convert to ms
      if (!isSliding) {
        // calculate current progress
        const progress = (currentTime / duration) * 100;
        setCurrentTime(currentTime);
        // set current time
        setProgress(progress);
      }
    }
  }

  /** handle events happen inside the component */
  // handle play button click
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

  // handle slider when change (passes in the new slider value when sliding)
  function handleSliderChange(value: number) {
    console.log(value);
    setIsSliding(true); // user is sliding
    // set the progress bar value to the slider value
    setProgress(value);
    // while sliding, calculate current time based on slider value (ms) and set it to currentTime
    const currentTime = (value / 100) * duration;
    setCurrentTime(currentTime);
  }

  // handle slider when change complete (mouse up)
  function handleChangeComplete(value: number) {
    console.log(value);
    // calculate current time based on slider value
    const currentTime = (value / 100) * duration;
    // set current time of audio element
    audioRef.current!.currentTime = currentTime / 1000; // convert from ms to s
    setCurrentTime(currentTime);
    // setProgress(value);
    setIsSliding(false);
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
                step={0.5}
                value={progress}
                tooltip={{ formatter: null }}
                onChange={handleSliderChange}
                onChangeComplete={handleChangeComplete}
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
