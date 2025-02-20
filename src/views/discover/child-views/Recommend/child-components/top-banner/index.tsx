import { useAppSelector } from '@/hooks/useAppSelector';
import { memo, useRef, useState } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import classNames from 'classnames';
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

  // Carousel callback functions
  function handleBeforeChange() {
    // before change banner, set currentBannerIndex to -1 to briefly deactivate the current dot
    setCurrentBannerIndex(-1);
  }

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

  // get the background image url
  let bgImageUrl;
  // currentBannerIndex could be undefined when banner has not been loaded
  if (currentBannerIndex >= 0 && banners.length > 0) {
    // add blur effect to the background image
    bgImageUrl = banners[currentBannerIndex].imageUrl + '?imageView&blur=40x20';
  }

  return (
    <BannerWrapper
      style={{ background: `url(${bgImageUrl}) center center/6000px` }}
    >
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            autoplay
            autoplaySpeed={3000}
            dots={false}
            effect="fade"
            ref={bannerRef}
            beforeChange={handleBeforeChange}
            afterChange={handleAfterChange}
          >
            {banners.map((item) => {
              return (
                <div className="banner-item 'sprite_01'" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  ></img>
                </div>
              );
            })}
          </Carousel>
          <ul className="dots">
            {banners.map((item, index) => {
              return (
                <li key={item.imageUrl}>
                  <span
                    className={classNames('item', 'sprite_01', {
                      active: currentBannerIndex === index,
                    })}
                  ></span>
                </li>
              );
            })}
          </ul>
        </BannerLeft>
        <BannerRight>
          <span className="download-text">PC Android iPhone WP iPad Mac</span>
        </BannerRight>
        <BannerControl>
          <button
            className="btn left sprite_icon2"
            onClick={handlePrevClick}
          ></button>
          <button
            className="btn right sprite_icon2"
            onClick={handleNextClick}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  );
};

export default memo(TopBanner);
