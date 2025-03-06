import { memo, useEffect, useState, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { Slider, message } from 'antd';
import {
  MusicWidgetWrapper,
  WidgetPlayControl,
  WidgetOperator,
  WidgetPlayInfo,
} from './style';
import { useAppSelector } from '@/hooks/useAppSelector';
import { useAppDispatch } from '@/hooks/useAppDispach';
import { formatImageSize, formatTime } from '@/utils/format';
import { getSongPlayUrl } from '@/utils/playerUtils';
import {
  changeLyricIndexAction,
  changePlayModeAction,
  changeMusicAction,
} from '@/views/Player/store/player';

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

  // use antd message hook to show lyric
  const [messageApi, contextHolder] = message.useMessage();

  const { currentSong, lyrics, lyricIndex, playMode } = useAppSelector(
    (state) => ({
      currentSong: state.player.currentSong,
      lyrics: state.player.lyrics,
      lyricIndex: state.player.lyricIndex,
      playMode: state.player.playMode,
    }),
    shallowEqual,
  );

  const dispatch = useAppDispatch();

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

    //match lyrics with current time
    let index = lyrics.length - 1;
    for (let i = 0; i < lyrics.length; i++) {
      if (lyrics[i].time > currentTime) {
        index = i - 1;
        break;
      }
    }

    // update lyric index in store when index changes or is not default value -1
    // console.log(index, lyricIndex);
    if (index === lyricIndex || index === -1) return;
    dispatch(changeLyricIndexAction(index));

    // show lyric
    const currentLyric = lyrics[index];
    console.log(currentLyric.text);
    messageApi.open({
      key: 'lyric', // same key will not show multiple message
      content: currentLyric.text,
      duration: 0,
      style: {
        bottom: '60px',
      },
      className: 'lyric-message',
    });
  }

  // handle when music ends
  function HandleTimeEnded() {
    // play next music when current music ends
    if (playMode === 1) {
      // repeat one
      audioRef.current?.play();
    } else {
      // repeat all or shuffle
      handleChangeMusic(true);
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

  // handle change music
  function handleChangeMusic(isNext = true) {
    // change music
    dispatch(changeMusicAction(isNext));
  }

  function HandleChangePlayMode() {
    // change play mode
    let newPlayMode = playMode + 1;
    if (newPlayMode > 2) {
      newPlayMode = 0;
    }
    // update play mode in store
    dispatch(changePlayModeAction(newPlayMode));
  }

  // handle slider when change (passes in the new slider value when sliding)
  function handleSliderChange(value: number) {
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
          <button
            className="btn sprite_playbar prev"
            onClick={() => handleChangeMusic(false)}
          ></button>
          <button
            className="btn sprite_playbar play"
            onClick={handlePlayBtnClick}
          ></button>
          <button
            className="btn sprite_playbar next"
            onClick={() => handleChangeMusic(true)}
          ></button>
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
              <span className="singer-name">{currentSong?.ar?.[0]?.name}</span>
            </div>
            <div className="progress">
              {/* antd Slider component */}
              <Slider
                step={0.2}
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
        <WidgetOperator $playMode={playMode}>
          <div className="left">
            <button className="btn icon_pip"></button>
            <button className="btn sprite_playbar favor"></button>
            <button className="btn sprite_playbar share"></button>
          </div>
          <div className="right sprite_playbar">
            <button className="btn sprite_playbar volume"></button>
            <button
              className="btn sprite_playbar mode"
              onClick={HandleChangePlayMode}
            ></button>
            <button className="btn sprite_playbar playlist"></button>
          </div>
        </WidgetOperator>
      </div>
      {/* display the lyric line in the message component */}
      {contextHolder}
      {/* audio element */}
      <audio
        ref={audioRef}
        onTimeUpdate={handleTimeUpdate}
        onEnded={HandleTimeEnded}
      />
    </MusicWidgetWrapper>
  );
};

export default memo(MusicWidget);
