import React, { useEffect, useState } from 'react';
import CategoryMenu from '../../components/CategorieMenu';
import Header from '../../components/Header';
import HotRecipeCard from '../../components/HotRecipeCard';
import { Container } from './styles';
import SimpleRecipes from '../../components/SimpleRecipes';
import { getHotRecipes } from '../../service/recipe';
import CanBeAChef from '../../components/CanBeAChef';
import axios from 'axios'

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
    };
    fetchHotRecipes();
  }, []);
  const [current, setCurrent] = useState(1);

  const nextRecipe = () => {
    setCurrent(current === hotRecipeCards.length - 1 ? 0 : current + 1);
  };

  const previousRecipe = () => {
    setCurrent(current === 0 ? hotRecipeCards.length - 1 : current - 1);
  };

  return (
    <Container>
      <Header />
      <div className="hot-recipes-container">
        <button
          type="button"
          className="lateral-hot-recipe previous-hot-recipe"
          aria-label="previous"
          onClick={() => {
            previousRecipe();
          }}
        />
        {hotRecipeCards.map((hotRecipe, index) => {
          if (index === current) {
            return <HotRecipeCard key={hotRecipe.name} hotRecipe={hotRecipe} />;
          }
          return undefined;
        })}
        <button
          type="button"
          className="lateral-hot-recipe next-hot-recipe"
          aria-label="next"
          onClick={() => {
            nextRecipe();
          }}
        />
      </div>
      <CategoryMenu />
      <SimpleRecipes />
      <CanBeAChef />
    </Container>
  );
}

export default Home;
