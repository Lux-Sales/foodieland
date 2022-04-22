import styled from "styled-components";

export const Container = styled.div`
  width: 1280px;
  height: 1616px;
  margin: 183px 0px 143px;
  h1 {
    height: 58px;
    width: 526px;
    margin: 0px 457px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 58px;
    letter-spacing: -0.04em;
  }
  p {
    height: 56px;
    width: 700px;
    margin: 24px 370px 96px 364px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    text-align: center;
    color: #00000099;
  }

.simple-recipe-grid{
  display: grid;
  grid-template-columns: repeat(3, 400px);
  margin: 0px 80px;
  gap: 40px;
}
`;
