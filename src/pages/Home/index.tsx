import React, { useEffect, useState } from "react";
import CategoryMenu from "../../components/CategorieMenu";
import Header from "../../components/Header";
import HotRecipeCard from "../../components/HotRecipeCard";
import { Container } from "./styles";
import SimpleRecipes from "../../components/SimpleRecipes";
import { getHotRecipes } from "../../service/recipe";

export interface HotRecipe {
  name: string;
  description: string;
  time: number;
  category: string;
  user: {
    name: string;
    avatar: string;
  };
  postedDate: string;
}

function Home() {
  const [hotRecipeCards, setHotRecipeCards] = useState<HotRecipe[]>([]);

  useEffect(() => {
    const fetchHotRecipes = async () => {
      const hotrecipes = await getHotRecipes();
      setHotRecipeCards(hotrecipes);
    }
    fetchHotRecipes()
  },[]);
  const [current, setCurrent] = useState(1);

  const nextRecipe = () => {
    setCurrent(current == hotRecipeCards.length - 1 ? 0 : current + 1);
  };

  const previousRecipe = () => {
    setCurrent(current == 0 ? hotRecipeCards.length - 1 : current - 1);
  };

  return (
    <Container>
      <Header />
      <div className="hot-recipes-container">
        <button
          className="lateral-hot-recipe previous-hot-recipe"
          onClick={() => {
            previousRecipe();
          }}
        />
        {hotRecipeCards.map((hotRecipe, index) => {
          if (index === current) {
            return <HotRecipeCard
            key={index}
            hotRecipe={hotRecipe} />;
          }
        })}
        <button
          className="lateral-hot-recipe next-hot-recipe"
          onClick={() => {
            nextRecipe();
          }}
        />
      </div>
      <CategoryMenu />
      <SimpleRecipes />
    </Container>
  );
}

export default Home;
