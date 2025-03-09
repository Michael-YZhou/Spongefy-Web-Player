import styled from 'styled-components';

export const SectionHeaderV1Wrapper = styled.div`
  height: 33px;
  border-bottom: 2px solid ${(props) => props.theme.color.sectionHeaderDivider};
  padding: 0 10px 4px 10px;
  /* background-position: -225px -156px; */

  display: flex;
  justify-content: space-between;
  align-items: center;

  .left {
    display: flex;
    align-items: center;

    .circle {
      width: 14px;
      height: 14px;
      border: 4px solid ${(props) => props.theme.color.sectionHeaderDivider}; /* Yellow ring */
      border-radius: 50%; /* Makes it circular */
      background-color: transparent; /* Hollow center */
      margin-right: 10px;
    }

    .title {
      font-size: 20px;
      font-family: 'Microsoft Yahei', Arial, Helvetica, sans-serif;
      margin-right: 20px;
    }

    .keywords {
      display: flex;
      align-items: center;

      .item {
        position: relative;
        top: 2px;

        .link {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }

        .divider {
          margin: 0 15px;
          color: #ccc;
        }

        &:last-child {
          .divider {
            display: none;
          }
        }
      }
    }
  }

  .right {
    position: relative;
    top: 2px;
    display: flex;
    align-items: center;

    .more {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
      color: #ccc;
    }

    .icon {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-left: 4px;
      /* background-position: 0 -240px; */
      color: ${(props) => props.theme.color.sectionHeaderDivider};
    }
  }
`;
