import React from "react";
import { Container } from "./styles";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import JuicyHamburguer from '../../assets/juicy_hamburguer.png'
import FavoriteIcon from '@mui/icons-material/Favorite';

function SimpleRecipeCard() {
  return <Container>
    <button>
      <FavoriteIcon />
    </button>
    <img src={JuicyHamburguer} alt="" />
    <h1>Big and Juicy Wagyu Beef Cheeseburger</h1>
    <div>
      <div>
        <TimerIcon />
        <span>30 Minutes</span>
      </div>
      <div>
        <RestaurantIcon />
        <span>Snack</span>
      </div>
    </div>
  </Container>;
}

export default SimpleRecipeCard;
