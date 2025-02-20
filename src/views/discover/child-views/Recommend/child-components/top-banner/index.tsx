import { useAppSelector } from '@/hooks/useAppSelector';
import { memo } from 'react';
import type { FC, ReactNode } from 'react';
import { shallowEqual } from 'react-redux';
import { Carousel } from 'antd';
import { BannerControl, BannerLeft, BannerRight, BannerWrapper } from './style';

interface IProps {
  children?: ReactNode;
  // TODO
}

const TopBanner: FC<IProps> = () => {
  // get banner data from store
  const { banners } = useAppSelector((state) => {
    return {
      banners: state.recommend.banners,
    };
  }, shallowEqual);

  function handlePrevClick() {}
  function handleNextClick() {}

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel autoplay autoplaySpeed={2000} effect="fade">
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
