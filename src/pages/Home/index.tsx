import React from "react";
import CategoryMenu from "../../components/CategorieMenu";
import Header from "../../components/Header";
import HotRecipeCard from "../../components/HotRecipeCard";
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <div className="hot-recipes-container">
        <div className="lateral-hot-recipe previous-hot-recipe">&nbsp;</div>
        <HotRecipeCard />
        <div className="lateral-hot-recipe next-hot-recipe">&nbsp;</div>
      </div>
      <CategoryMenu />
    </Container>
  );
}

export default Home;
