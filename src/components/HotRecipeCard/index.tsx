import React from 'react';
import TimerIcon from '@mui/icons-material/Timer';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import PlayCircleFilledWhiteIcon from '@mui/icons-material/PlayCircleFilledWhite';
import { Container } from './styles';
import { HotRecipe } from '../../pages/Home';

interface HotRecipeCardProps {
  hotRecipe: HotRecipe;
}

function HotRecipeCard(props: HotRecipeCardProps) {
  const { hotRecipe } = props;
  return (
    <Container>
      <div className="hot-label">
        <span>Hot Recipes</span>
      </div>
      <h1>{hotRecipe.name}</h1>
      <p>{hotRecipe.description}</p>
      <div className="info-div">
        <div className="info-card">
          <TimerIcon />
          <span>
            {hotRecipe.time}
            {' '}
            Minutes
          </span>
        </div>
        <div className="info-card">
          <RestaurantIcon />
          <span>{hotRecipe.category}</span>
        </div>
      </div>
      <footer>
        <div className="user-card">
          <img src={hotRecipe.user.avatar} alt="user-avatar" />
          <div>
            <span>{hotRecipe.user.name}</span>
            <span>{hotRecipe.postedDate}</span>
          </div>
        </div>
        <div className="view-recipes">
          <span>View Recipes</span>
          <PlayCircleFilledWhiteIcon />
        </div>
      </footer>
    </Container>
  );
}

export default HotRecipeCard;
