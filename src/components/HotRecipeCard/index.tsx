import React from "react";
import { Container } from "./styles";
function HotRecipeCard() {
  return (
    <Container>
      <span>Hot Recipes</span>
      <h1>Spicy Delicious chicken wings</h1>
      <span>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo
        labore voluptate, molestiae aliquid dolorem voluptates officiis
        dignissimos!
      </span>
      <div>
        <div>
          <span>Minutes</span>
        </div>
        <div>
          <span>Chicken</span>
        </div>
      </div>
      <div>
        <div>
          <img src="" alt="" />
          <div>
            <span>John Smith</span>
            <span>15 March 2022</span>
          </div>
          <div>
            <span>View Recipes</span>

          </div>
        </div>
      </div>
    </Container>
  );
}

export default HotRecipeCard;
