import styled from 'styled-components';
import wrapBgImg from '@/assets/images/wrap-bg.png';

export const RecommendWrapper = styled.div`
  > .content {
    /* border: 1px solid #d3d3d3; */
    width: 980px;
    /* background-image: url(${wrapBgImg}); */
    background: linear-gradient(to top left, black, #333);
    /* gap: 2px; */
    display: flex;

    > .left {
      width: 728px;
      padding: 20px 20px;
      margin-right: 2px;
    }

    > .right {
      margin-left: 1px;
      margin-right: 2px;
      width: 247px;
    }
  }
`;
