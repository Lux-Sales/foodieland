import styled from 'styled-components';

export const Container = styled.div`
  width: 1280px;
  height: 597px;
  display: flex;
  margin: 0 80px;
  div {
    width: calc(1280px - 710px);
    height: 100%;
    margin-right: 50px;
    h1 {
      margin-top: 140px;
      width: 526px;
      height: 116px;
      font-weight: 600;
      font-size: 48px;
      line-height: 58px;
      letter-spacing: -0.04em;
      color: #000000;
    }
    p {
      width: 508px;
      height: 84px;
      font-size: 16px;
      line-height: 28px;
      color: #00000099;
      margin-top: 24px;
    }
    button {
      margin-top: 72px;
      width: 180px;
      height: 60px;
      background: #000000;
      border-radius: 16px;
      color: #fff;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
    }
  }
  div + div {
    position: relative;
    background: linear-gradient(to top, #e7f9fd, #fff);
    width: 650px;
    height: 100%;
    border-radius: 25px;
    img {
      position: absolute;
    }
  }
  .chef {
    left: -50px;
  }

  .beef {
    width: 80px;
    height: 80px;
    left: 80px;
    top: 60px;
  }
  .onion {
    width: 50px;
    height: 50px;
    left: 440px;
    top: 90px;
  }
  .lettuce {
    width: 80px;
    height: 80px;
    left: 530px;
    top: 145px;
  }
  .tomato {
    width: 50px;
    height: 50px;
    left: -20px;
    top: 385px;
  }
`;
