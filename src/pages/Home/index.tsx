import React from "react";
import Header from "../../components/Header";
import HotRecipeCard from '../../components/HotRecipeCard'
import { Container } from "./styles";

function Home() {
  return (
    <Container>
      <Header />
      <HotRecipeCard/>
        <h1>home</h1>
    </Container>
  );
}

export default Home;
