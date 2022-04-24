import React from "react";
import { Container } from "./styles";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import JuicyHamburguer from '../../assets/juicy_hamburguer.png'
import FavoriteIcon from '@mui/icons-material/Favorite';
import { SimpleRecipe } from '../SimpleRecipes'

interface SimpleRecipeCardProps{
  simpleRecipe: SimpleRecipe
}
function SimpleRecipeCard(props:SimpleRecipeCardProps) {
  const {simpleRecipe} = props;
  return <Container>
    <button>
      <FavoriteIcon style={{color: simpleRecipe.favorited?"#FF6363":"#dbe2e5"}}/>
    </button>
    <img src={simpleRecipe.photo} alt="" />
    <h1>{simpleRecipe.name}</h1>
    <div>
      <div>
        <TimerIcon />
        <span>{simpleRecipe.time}Minutes</span>
      </div>
      <div>
        <RestaurantIcon />
        <span>{simpleRecipe.category}</span>
      </div>
    </div>
  </Container>;
}

export default SimpleRecipeCard;
