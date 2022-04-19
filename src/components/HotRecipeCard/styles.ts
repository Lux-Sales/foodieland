import styled from 'styled-components'
import chickenWings from '../../assets/chicken_wings.jpg'

export const Container = styled.div`
width: 1310px;
height: 640px;
background: linear-gradient(to right, #E7F9FD, #fff) no-repeat left, url(${chickenWings}) no-repeat right 30%;
background-size: 50% 100%;
margin: 40px 10px 160px 40px;
border-radius: 45px 0px 0px 45px;
padding: 40px 10px 40px 50px;

h1{
  width: 450px;
  font-size: 50px;
  margin: 23px 0px;
  font-weight: bold;
}
p{
  width: 550px;
  color: #5C6466;
  margin-bottom: 35px;
  line-height: 170%;
}

footer{
  display: flex;
  justify-content: space-between;
  width: 450px;
}

.hot-label{
  display: flex;
  background-color: #fff;
  border-radius: 25px;
  width: 140px;
  height: 50px;
  align-items: center;
  justify-content: right;
  span{
    font-weight: bold;
    margin-right: 15px;
    font-size: 14px;
  }
}

.info-div{
display: flex;
width: 233px;
justify-content: space-between;
margin-bottom: 140px;
}

.info-card{
  display: flex;
  background-color: #DBEDF1;
  border-radius: 15px;
  font-size: 14px;
  align-items: center;
  justify-content: center;
  padding: 2px 5px;
  svg,span{
    margin: 3px;
  }
  span{
    color: #5C6466;
  }
}

.user-card{
  display:flex;
  align-items: center;
  justify-content: center;
  img{
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }
  div{
    display: flex;
    flex-direction: column;
    margin-left: 15px;
    span:first-child{
      font-weight: bold;
    }
    span+span{
      color: #5C6466;
    }

  }
}

.view-recipes{
    display:flex;
    background-color: #000000;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    span{
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      color: #fff;
      font-weight: bold;
      margin: 20px 15px 20px 30px;
    }
    svg{
      color: #fff;
      margin-right: 30px;
    }
  }
`


