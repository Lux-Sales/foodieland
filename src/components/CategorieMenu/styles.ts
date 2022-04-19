import styled from 'styled-components';

export const Container = styled.div`
width: 1280px;
height: 342px;
margin: 0px 80px;
header{
  display:flex;
  justify-content: space-between;
  button{
    background-color: #E7FAFE;
    font-weight: bold;
    border: none;
    border-radius: 15px;
    width: 200px;
    height: 60px;
    font-size: 15px;
  }
}
nav{
  ul{
    display:flex;
    align-items:center;
    justify-content:space-between;
    li{
      width:180px;
      height:202px;
      display:flex;
      flex-direction:column;
      align-items:center;
      justify-content:center;
      font-weight: bold;
      /* background-image: linear-gradient(to top, #F6F7F3, #fff); */
      border-radius: 0 0 25px 25px;
      span{
        margin-top: 50px;
      }
    }
  }
}
`
