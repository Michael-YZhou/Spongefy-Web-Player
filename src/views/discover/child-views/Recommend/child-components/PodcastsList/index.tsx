import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { PodcastsListWrapper } from './style';
import SectionHeaderV2 from '@/components/SectionHeaderV2';
import { useAppSelector } from '@/hooks/useAppSelector';

interface IProps {
  children?: ReactNode;
  // TODO
}

const PodcastsList: FC<IProps> = () => {
  const { podcastsList } = useAppSelector((state) => ({
    podcastsList: state.recommend.podcastsList,
  }));

  return (
    <PodcastsListWrapper>
      <SectionHeaderV2 title="Popular Podcasts" />
      <div className="podcasts-list">
        {podcastsList.map((podcast) => {
          return (
            <div key={podcast.id} className="podcast-item">
              <Link className="image" to={`/discover/radio`}>
                <img
                  src={podcast.mainSong.album.picUrl}
                  alt={podcast.mainSong.name}
                />
              </Link>

              <div className="info">
                <div className="name">{podcast.mainSong.name}</div>
                <div className="desc">{podcast.radio.name}</div>
              </div>
            </div>
          );
        })}
      </div>
    </PodcastsListWrapper>
  );
};

export default memo(PodcastsList);
