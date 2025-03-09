import styled from 'styled-components';
import sprite01Img from '@/assets/images/sprite_01.png';

export const HeaderWrapper = styled.div`
  height: 75px;
  /* background-color: #f7e948; */
  /* background-color: ${(props) => props.theme.color.mainHeaderBg}; */
  font-size: 14px;
  /* color: #333; */
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    /* background-color: #c20c0c; */
    background-color: ${(props) => props.theme.color.subHeaderBg};
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo-box {
    margin-right: 40px;
    display: flex;
    .logo-img {
      display: block;
      width: 50px;
      height: 40px;
      margin: 15px 0;
      padding: 4px;
      /* background-image: url(${sprite01Img});
    background-position: 0 0;
    text-indent: -9999px; */
      background-color: ${(props) => props.theme.color.subHeaderBg};
      border-radius: 10px;
    }

    .logo-text {
      margin: 0 10px;
      width: 80px;
      text-align: center;
      line-height: 70px;
      font-size: 24px;
      color: #fff;
    }
  }

  .title-list {
    display: flex;
    line-height: 70px;

    .title-item {
      position: relative;

      a {
        display: block;
        padding: 0 20px;
        color: #ccc;
        /* color: #333; */
      }

      &:last-of-type a {
        position: relative; /* Ensure parent is positioned */
      }

      &:last-of-type a::after {
        position: absolute;
        content: '';
        display: block; /* Ensures the pseudo-element takes up space */
        width: 28px;
        height: 19px;
        background-image: url(${sprite01Img});
        background-position: -190px 0;
        top: 20px;
        right: -8px;
      }

      &:hover a,
      .active {
        color: #fff;
        background: #000;
        text-decoration: none;
      }

      .active .icon {
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 7px;
        bottom: -1px;
        left: 50%;
        border-radius: 15px 15px 0 0px;
        transform: translate(-50%, 0);
        background-position: -227px 0;

        .triangle-up {
          width: 0;
          height: 0;
          border-left: 6px solid transparent;
          border-right: 6px solid transparent;
          border-bottom: 6px solid ${(props) => props.theme.color.subHeaderBg}; /* Yellow triangle */
        }
      }
    }
  }
`;
export const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  color: #787878;
  font-size: 12px;

  > .search {
    width: 158px;
    height: 32px;
    border-radius: 16px;

    input {
      &::placeholder {
        font-size: 12px;
      }
    }
  }

  .centre {
    width: 90px;
    height: 32px;
    line-height: 32px;
    margin: 0 16px;
    text-align: center;
    border: 1px solid #666;
    border-radius: 16px;
    color: #ccc;
    cursor: pointer;

    &:hover {
      color: #fff;
      border-color: #fff;
    }
  }
`;
