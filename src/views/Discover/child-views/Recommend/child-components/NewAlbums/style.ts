import styled from 'styled-components';

export const NewAlbumsWrapper = styled.div`
  margin-top: 50px;

  .new-albums-content {
    height: 186px;
    /* background-color: #f5f5f5;
    border: 1px solid #d3d3d3; */
    background: linear-gradient(to top left, black, #333);
    border: 1px solid #242424;
    margin: 20px 0 37px;
    padding: 0 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .arrow {
      position: relative;
      top: -12px;
      width: 17px;
      height: 17px;
      cursor: pointer;
    }

    .arrow-left {
      background-position: -260px -75px;

      &:hover {
        background-position: -280px -75px;
      }
    }

    .arrow-right {
      background-position: -300px -75px;

      &:hover {
        background-position: -320px -75px;
      }
    }

    .banner {
      overflow: hidden;
      flex: 1; /* Each item takes equal space, this will fix the item width inside the carousel */

      .album-list {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
