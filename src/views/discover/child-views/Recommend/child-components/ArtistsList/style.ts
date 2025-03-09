import styled from 'styled-components';

export const ArtistsListWrapper = styled.div`
  padding: 20px;

  .artists-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      /* background-color: #fafafa; */
      background-color: #242424;
      text-decoration: none;

      :hover {
        /* background-color: #f4f4f4; */
        background-color: #333;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 3px 12px;
        /* border: 1px, solid, #e9e9e9; */
        border: 1px, solid, #242424;
        overflow: hidden;

        .name {
          font-size: 14px;
          font-weight: 700;
          /* color: #000; */
          color: #ccc;
        }

        .transName {
          font-size: 12px;
          color: #666;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }
    }
  }

  .artist-account {
    margin-top: 12px;
    a {
      color: #333;
      font-weight: 700;
      text-align: center;
      display: block;
      height: 31px;
      line-height: 31px;
      border-radius: 4px;
      /* background-color: #fafafa; */
      /* border: 1px solid #c3c3c3; */
      background-color: ${(props) => props.theme.color.subHeaderBg};
      /* text-shadow: 0 1px 0 #8a060b; */
      text-decoration: none;

      &:hover {
        /* background-color: #f4f4f4; */
        background-color: ${(props) => props.theme.color.subHeaderActivate};
        text-shadow: 0 1px 0 #8a060b;
        color: #fff;
      }
    }
  }
`;
