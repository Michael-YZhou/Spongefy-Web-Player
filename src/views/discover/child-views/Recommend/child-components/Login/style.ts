import styled from 'styled-components';

export const LoginWrapper = styled.div`
  height: 126px;
  /* background-position: 0 0; */
  background: linear-gradient(to top left, black, #333);
  padding: 16px 22px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    line-height: 25px;
    font-weight: 700;
  }

  a {
    margin-top: 10px;
    display: inline-block;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;

    text-decoration: none;
    /* background-position: 0 -195px; */
    text-shadow: 0 1px 0 #8a060b;
    color: #000;
    background-color: ${(props) => props.theme.color.subHeaderBg};

    &:hover {
      /* background-position: -110px -195px; */
      color: #fff;
      text-shadow: 0 1px 0 #8a060b;
      background-color: ${(props) => props.theme.color.subHeaderActivate};
    }
  }
`;
