import { memo, useRef } from 'react';
import type { FC, ReactNode } from 'react';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { NewAlbumsWrapper } from './style';
import SectionHeaderV1 from '@/components/SectionHeaderV1';

interface IProps {
  children?: ReactNode;
  // TODO
}

const NewAlbums: FC<IProps> = () => {
  // create a ref for carousel for controlling carousel
  const carouselRef = useRef<CarouselRef>(null);

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
            {[1, 2, 3].map((item) => {
              return <h2 key={item}>{item}</h2>;
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
