import React from "react";
import SimpleRecipeCard from "../SimpleRecipeCard";
import { Container } from "./styles";

function SimpleRecipes() {
  return (
    <Container>
      <h1>Simple and tasty recipes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>
      <div className="simple-recipe-grid">
        <SimpleRecipeCard />
        <SimpleRecipeCard />
        <SimpleRecipeCard />
        <SimpleRecipeCard />
        <SimpleRecipeCard />
      </div>
    </Container>
  );
}

export default SimpleRecipes;
