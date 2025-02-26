import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { ArtistsListWrapper } from './style';
import SectionHeaderV2 from '@/components/SectionHeaderV2';
import { useAppSelector } from '@/hooks/useAppSelector';
import { shallowEqual } from 'react-redux';
import { Link } from 'react-router-dom';
import { formatImageSize } from '@/utils/format';

interface IProps {
  children?: ReactNode;
  // TODO
}

const ArtistsList: FC<IProps> = () => {
  const { artistsList } = useAppSelector(
    (state) => ({
      artistsList: state.recommend.artistsList,
    }),
    shallowEqual,
  );

  return (
    <ArtistsListWrapper>
      <SectionHeaderV2
        title="Featured Artists"
        moreText="show all &gt;"
        moreLink="/discover/artists"
      />
      <div className="artist-list">
        {artistsList.map((artist) => {
          return (
            <Link to="/discover/artists" key={artist.id} className="item">
              <img src={formatImageSize(artist.picUrl, 62)} alt={artist.name} />
              <div className="info">
                <div className="name">{artist.name}</div>
                <div className="transName">{artist.trans || ''}</div>
              </div>
            </Link>
          );
        })}
      </div>
      <div className="artist-account">
        <Link to="/">Claim your Artists account</Link>
      </div>
    </ArtistsListWrapper>
  );
};

export default memo(ArtistsList);
