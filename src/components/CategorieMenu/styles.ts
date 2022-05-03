import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 342px;
  margin: 0px 80px;
  header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 80px;
    button {
      background-color: #e7fafe;
      font-weight: bold;
      border: none;
      border-radius: 15px;
      width: 200px;
      height: 60px;
      font-size: 15px;
    }
  }
  nav {
    height: 202px;
    ul {
      display: flex;
      align-items: end;
      height: 100%;
      justify-content: space-between;
      a {
        width: 180px;
        height: 202px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-weight: bold;
        border-radius: 0 0 25px 25px;
        text-decoration: none;
        span {
          margin-top: 50px;
          color: #000;
          font-weight: 600;
          font-size: 18px;
          line-height: 22px;
          text-align: center;
          letter-spacing: -0.02em;
        }
      }
    }
  }
`;
