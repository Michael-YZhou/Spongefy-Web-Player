import styled from 'styled-components';
import hotIcon from '@/assets/images/hot.png';

export const HeaderWrapper = styled.div`
  height: 75px;
  /* background-color: #f7e948; */
  background-color: #242424;
  font-size: 14px;
  /* color: #333; */
  color: #fff;

  .content {
    display: flex;
    justify-content: space-between;
  }

  .divider {
    height: 5px;
    background-color: #c20c0c;
  }
`;

export const HeaderLeft = styled.div`
  display: flex;

  .logo {
    display: block;
    width: 176px;
    height: 70px;
    background-position: 0 0;
    background-color: #f7e948;
    text-indent: -9999px;
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
        width: 24px;
        height: 13px;
        background-image: url(${hotIcon});
        background-color: #fff;
        border-radius: 4px;
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
      }
    }
  }
`;
export const HeaderRight = styled.div``;
