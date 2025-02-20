import { useAppSelector } from '@/hooks/useAppSelector';
import { memo, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import type { CarouselRef } from 'antd/es/carousel';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';

interface IProps {
  children?: ReactNode;
  // TODO
}

const TopBanner: FC<IProps> = () => {
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  // antd Carousel has its own ref type definition which can be imported from 'antd/es/carousel'
  const bannerRef = useRef<CarouselRef>(null);

  // get banner data from store
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners,
    };
  }, shallowEqual);

  // Carousel afterChange callback function
  function handleAfterChange(current: number) {
    // Carousel afterChange will pass the current index of the banner to the callback function
    setCurrentBannerIndex(current);
  }

  function handlePrevClick() {
    bannerRef.current?.prev();
  }
  function handleNextClick() {
    bannerRef.current?.next();
  }

  let bgImageUrl = banners[currentBannerIndex]?.imageUrl; // currentBannerIndex could be undefined when banner has not been loaded
  // add blur effect to the background image
  if (bgImageUrl) {
    bgImageUrl = bgImageUrl + '?imageView&blur=40x20';
  }

  return (
    <BannerWrapper
      style={{ background: `url(${bgImageUrl}) center center/6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={2000}
            effect="fade"
            ref={bannerRef}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              );
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight>
          <span className="download-text">PC Android iPhone WP iPad Mac</span>
        </BannerRight>
        <BannerControl>
          <button className="btn left" onClick={handlePrevClick}></button>
          <button className="btn right" onClick={handleNextClick}></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
