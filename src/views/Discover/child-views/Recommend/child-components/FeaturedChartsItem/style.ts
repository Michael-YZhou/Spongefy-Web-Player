import styled from 'styled-components';

export const FeaturedChartsItemWrapper = styled.div`
  width: 230px;

  &:last-child {
    width: 228px;
  }

  .header {
    height: 100px;
    display: flex;
    margin: 20px 0 0 20px;
    background-color: #242424;

    .image {
      width: 80px;
      height: 80px;
      position: relative;

      img {
        width: 80px;
        height: 80px;
      }
    }

    .info {
      margin: 5px 0 0 10px;

      .name {
        font-size: 14px;
        font-weight: 700;
        /* color: #333; */
        color: #ccc;
      }

      a {
        font-size: 14px;
        /* color: #333; */
        color: #fff;
        font-weight: 700;
      }

      .btn {
        display: inline-block;
        /* text-indent: -9999px; */
        width: 22px;
        height: 22px;
        margin: 8px 10px 0 0;
        cursor: pointer;
        font-size: 22px;
        color: #ccc;

        &:hover {
          color: #fff;
        }
      }

      /* .play {
        background-position: -267px -205px;

        &:hover {
          background-position: -267px -235px;
        }
      }

      .favor {
        background-position: -300px -205px;

        &:hover {
          background-position: -300px -235px;
        }
      } */
    }
  }

  .list {
    .list-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 32px;
      background-color: #242424;

      &:nth-child(odd) {
        background-color: #1a1a1a; /* Different background color for odd-indexed items */
      }

      &:nth-child(-n + 3) .rank {
        color: #c10d0c;
      }

      .rank {
        width: 35px;
        text-align: center;
        margin-left: 10px;
        font-size: 16px;
      }

      .info {
        /* color: #000; */
        color: #ccc;
        width: 170px;
        height: 17px;
        line-height: 17px;
        display: flex;
        justify-content: space-between;

        .name {
          flex: 1;

          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          cursor: pointer;

          &:hover {
            text-decoration: underline;
          }
        }

        .operator {
          display: flex;
          align-items: center;
          display: none;
          width: 82px;
          font-size: 17px;
          color: #ccc;

          .btn {
            width: 17px;
            height: 17px;
            margin-left: 8px;
            cursor: pointer;

            &:hover {
              color: #fff;
            }
          }

          /* .play {
            background-position: -267px -268px;

            &:hover {
              background-position: -267px -288px;
            }
          }

          .add {
            position: relative;
            top: 2px;
            background-position: 0 -700px;

            &:hover {
              background-position: -22px -700px;
            }
          }

          .favor {
            background-position: -297px -268px;

            &:hover {
              background-position: -297px -288px;
            }
          } */
        }

        &:hover {
          .operator {
            display: block;
          }
        }
      }
    }
  }

  .footer {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 32px;
    margin-right: 32px;
  }
`;
