import styled from 'styled-components';

export const NavBarWrapper = styled.div`
  height: 30px;
  background-color: ${(props) => props.theme.color.subHeaderBg};

  .nav {
    display: flex;
    padding-left: 180px;
    position: relative;
    top: -4px;

    .item {
      a {
        display: inline-block;
        height: 20px;
        line-height: 20px;
        padding: 0 13px;
        margin: 7px 17px 0;
        /* color: #fff; */
        color: #242424;
        font-size: 12px;

        &:hover,
        &.active {
          text-decoration: none;
          /* background-color: #9b0909; */
          background-color: ${(props) => props.theme.color.subHeaderActivate};
          border-radius: 20px;
        }
      }
    }
  }
`;
