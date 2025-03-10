import styled from 'styled-components';
import downloadImg from '@/assets/images/download.png';
import bannerSprite from '@/assets/images/banner_sprite.png';

export const BannerWrapper = styled.div`
  .banner {
    height: 270px;
    display: flex;
    position: relative;
  }
`;

export const BannerLeft = styled.div`
  position: relative;
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 270px;
    .image {
      width: 100%;
    }
  }

  .dots {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    justify-content: center;

    > li {
      margin: 0 2px;

      .item {
        display: inline-block;
        width: 20px;
        height: 20px;
        background-image: url(${bannerSprite});
        background-position: 3px -343px;
        cursor: pointer;
        &:hover,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`;

export const BannerRight = styled.div`
  width: 250px;
  height: 270px;
  background: radial-gradient(
    circle,
    rgba(120, 120, 120, 1) 10%,
    rgba(60, 60, 60, 1) 50%,
    rgba(30, 30, 30, 1) 100%
  );
  /* background: url(${downloadImg});
  background-size: cover;
  background-position: 0 -40px; */

  .singing-gif {
    display: block;
    margin: 20px auto 0; /* 50px space on top, auto centers horizontally */
    max-height: 70%; /* Ensures responsiveness */
  }

  .download-text {
    display: block;
    width: 250px;
    /* color: #8d8d8d; */
    color: #ccc;
    text-align: center;
    margin-top: 10px;

    &:hover {
      color: #fff;
    }
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  height: 63px;

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${bannerSprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0px -360px;
  }

  .right {
    right: -68px;
    background-position: 00px -508px;
  }
`;
