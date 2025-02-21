import styled from 'styled-components';
import wrapBgImg from '@/assets/images/wrap-bg.png';

export const RecommendWrapper = styled.div`
  > .content {
    border: 1px solid #d3d3d3;
    width: 980px;
    background-image: url(${wrapBgImg});
    display: flex;

    > .left {
      width: 730px;
      padding: 20px 20px;
    }

    > .right {
      margin-left: 1px;
      width: 249px;
    }
  }
`;
