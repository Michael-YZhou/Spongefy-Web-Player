import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { PopularWrapper } from './style';
import SubHeaderV1 from '@/components/SectionHeaderV1';
import { useAppSelector } from '@/hooks/useAppSelector';
import PlayListItem from '@/components/PlayListItem';

interface IProps {
  children?: ReactNode;
  // TODO
}

const Popular: FC<IProps> = () => {
  const { popularAlbums = [] } = useAppSelector((state) => {
    return { popularAlbums: state.recommend.popularAlbums };
  }, shallowEqual);

  return (
    <PopularWrapper>
      <SubHeaderV1
        title="Popular albums and singles"
        keywords={['Pop', 'Rock', 'Hip hop', 'R&B', 'Jazz']}
        moreLink="/discover/playlist"
      />
      <div className="popularAlbumsList">
        {popularAlbums.map((item) => {
          return <PlayListItem key={item.id} itemData={item} />;
        })}
      </div>
    </PopularWrapper>
  );
};

export default memo(Popular);
