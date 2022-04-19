import styled from 'styled-components'

export const Container = styled.div`
width: 1440px;
.hot-recipes-container{
  display:flex;
  width: 100%;
  justify-content: space-between;
}

.lateral-hot-recipe{
  background-color: #E7F9FD;
  height: 600px;
  width: 40px;
  margin-top: 60px;
}

.previous-hot-recipe{
  border-radius: 0px 45px 45px 0px;
}

.next-hot-recipe{
  border-radius: 45px 0px 0px 45px;
}
`
