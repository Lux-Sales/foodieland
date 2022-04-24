import React, { useEffect, useState } from "react";
import { getSimpleRecipes } from "../../service/recipe";
import SimpleRecipeCard from "../SimpleRecipeCard";
import { Container } from "./styles";

export interface SimpleRecipe{
  name:string,
  time:number,
  category:string,
  favorited:boolean,
  photo:string
}

function SimpleRecipes() {
  const [simpleRecipes, setSimpleRecipes] = useState<SimpleRecipe[]>([])

  useEffect(()=>{
    const fetchSimpleRecipes = async () => {
      const simpleRecipes = await getSimpleRecipes();
      setSimpleRecipes(simpleRecipes);
    }
    fetchSimpleRecipes();
  },[])
  return (
    <Container>
      <h1>Simple and tasty recipes</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqut enim ad minim{" "}
      </p>
      <div className="simple-recipe-grid">
        {simpleRecipes.map((simpleRecipe,index) => {
          return <SimpleRecipeCard
          key={index}
          simpleRecipe={simpleRecipe} />;
        })}
      </div>
    </Container>
  );
}

export default SimpleRecipes;
