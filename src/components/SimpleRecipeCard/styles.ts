import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 434px;
  background: linear-gradient(to top, #e7f9fd, #fff) no-repeat center;
  border-radius: 25px;
  button {
    position: absolute;
    width: 48px;
    left: 396px;
    top: 1745px;
    height: 48px;
    border-radius: 50%;
    border: none;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    svg {
      margin-top: 5px;
      color: #dbe2e5;
      width: 30px;
      height: 30px;
    }
  }
  img {
    width: 100%;
    height: 250px;
    border-radius: 25px 25px 0px 0px;
  }
  h1 {
    width: 352px !important;
    height: 64px !important;
    margin: 24px !important;
    font-style: normal !important;
    font-weight: 600 !important;
    font-size: 24px !important;
    line-height: 32px !important;
    letter-spacing: -0.04em !important;
  }
  div {
    display: flex;
    margin: 0px 24px 32px 24px;
    div {
      display: flex;
      align-items: center;
      justify-content: center;
      svg {
        margin-right: 13px;
      }
    }
  }
`;
