import { memo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { NewAlbumsWrapper } from './style';
import SectionHeaderV1 from '@/components/SectionHeaderV1';
import { useAppSelector } from '@/hooks/useAppSelector';
import AlbumItem from '@/components/AlbumItem';
import { shallowEqual } from 'react-redux';

interface IProps {
  children?: ReactNode;
  // TODO
}

const NewAlbums: FC<IProps> = () => {
  // create a ref for carousel for controlling carousel
  const carouselRef = useRef<CarouselRef>(null);

  const { newAlbums = [] } = useAppSelector(
    (state) => ({
      newAlbums: state.recommend.newAlbums,
    }),
    shallowEqual,
  );

  // handle click event for previous button
  const handlePrevClick = () => {
    carouselRef.current?.prev();
  };

  // handle click event for next button
  const handleNextClick = () => {
    carouselRef.current?.next();
  };

  return (
    <NewAlbumsWrapper>
      <SectionHeaderV1 title="New Albums" moreLink="/discover/album" />
      <div className="new-albums-content">
        <button
          className="sprite_02 arrow arrow-left"
          onClick={handlePrevClick}
        ></button>
        <div className="banner">
          <Carousel ref={carouselRef} dots={false} speed={1500}>
            {[0, 1].map((item) => {
              return (
                <div key={item}>
                  <div className="album-list">
                    {newAlbums.slice(item * 5, (item + 1) * 5).map((album) => {
                      return <AlbumItem key={album.id} itemData={album} />;
                    })}
                  </div>
                </div>
              );
            })}
          </Carousel>
        </div>
        <button
          className="sprite_02 arrow arrow-right"
          onClick={handleNextClick}
        ></button>
      </div>
    </NewAlbumsWrapper>
  );
};

export default memo(NewAlbums);
