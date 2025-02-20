import styled from 'styled-components';
import downloadImg from '@/assets/images/download.png';
import icon2Img from '@/assets/images/icon2.png';

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
        background: url(${icon2Img});
        cursor: pointer;

        &:hovver,
        &.active {
          background-position: -16px -343px;
        }
      }
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: 'https://music.163.com/#/download',
  target: '_blank',
})`
  width: 254px;
  height: 270px;
  background: url(${downloadImg});
  background-size: cover;
  background-position: 0 -40px;

  .download-text {
    display: block;
    width: 254px;
    color: #8d8d8d;
    text-align: center;
    margin-top: 244px;
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    width: 37px;
    height: 63px;
    background-image: url(${icon2Img});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 4px -223px;
  }

  .right {
    right: -68px;
    background-position: -40px -223px;
  }
`;
