import React from "react";
import { Container } from "./styles";
import TimerIcon from "@mui/icons-material/Timer";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
function HotRecipeCard() {
  return (
    <Container>
      <div className="hot-label">
        <span>Hot Recipes</span>
      </div>
      <h1>Spicy Delicious chicken wings</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        labore voluptate, molestiae aliquid dolorem voluptates officiis
        dignissimos!
      </p>
      <div className="info-div">
        <div className="info-card">
          <TimerIcon />
          <span>30 Minutes</span>
        </div>
        <div className="info-card">
          <RestaurantIcon />
          <span>Chicken</span>
        </div>
      </div>
      <footer>
        <div className="user-card">
          <img
            src="https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
            alt="user-avatar"
          />
          <div>
            <span>John Smith</span>
            <span>15 March 2022</span>
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
