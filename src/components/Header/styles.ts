import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1440px;
  height: 110px;
  border: 1px solid #00000019;

  a {
    text-decoration: none;
    color: #000000;
  }

  ul {
    display: flex;
    justify-content: space-between;
  }

  .nav-ul {
    width: 505px;
  }
  .social-media-ul {
    width: 134px;
  }
`;
