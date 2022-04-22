import React, { useEffect, useState } from "react";
import CategoryMenu from "../../components/CategorieMenu";
import Header from "../../components/Header";
import HotRecipeCard from "../../components/HotRecipeCard";
import { Container } from "./styles";
import SimpleRecipes from "../../components/SimpleRecipes";

export interface HotRecipe{
  name: string;
  description: string;
  time: string;
  category: string;
  user: {
      name: string;
      avatar:string;
  };
  postedDate: string;
}

function Home() {

  const [hotRecipeCards, setHotRecipeCards] = useState<HotRecipe[]>([]);

  useEffect(() => {
    const fetchHotRecipeCards = () => {
      return [
        {
          name: "Spicy Delicious chicken wings 1",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore voluptate, molestiae aliquid dolorem voluptates officiis dignissimos!",
          time: "30 Minutes",
          category: "Chicken",
          user: {
            name: "John Smith",
            avatar:"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          },
          postedDate: "15 March 2022",
        },
        {
          name: "Spicy Delicious chicken wings 2",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore voluptate, molestiae aliquid dolorem voluptates officiis dignissimos!",
          time: "30 Minutes",
          category: "Chicken",
          user: {
            name: "John Smith",
            avatar:"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          },
          postedDate: "15 March 2022",
        },
        {
          name: "Spicy Delicious chicken wings 3",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore voluptate, molestiae aliquid dolorem voluptates officiis dignissimos!",
          time: "30 Minutes",
          category: "Chicken",
          user: {
            name: "John Smith",
            avatar:"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          },
          postedDate: "15 March 2022",
        },
        {
          name: "Spicy Delicious chicken wings 4",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore voluptate, molestiae aliquid dolorem voluptates officiis dignissimos!",
          time: "30 Minutes",
          category: "Chicken",
          user: {
            name: "John Smith",
            avatar:"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
          },
          postedDate: "15 March 2022",
        }
      ];
    };
    const hotrecipes = fetchHotRecipeCards()
    setHotRecipeCards(hotrecipes)
  });
  const [current, setCurrent] = useState(1);

  const changeRecipe = async () => {
    if (current === hotRecipeCards.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  };

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
        <button className="lateral-hot-recipe previous-hot-recipe"
        onClick={()=>{previousRecipe()}}
        />
        {hotRecipeCards.map((hotRecipe, index) =>
        {
          if (index === current) {
            return (
              <HotRecipeCard
              hotRecipe={hotRecipe}
              />
              );
            }}
        )
        }
        <button className="lateral-hot-recipe next-hot-recipe"
        onClick={()=>{nextRecipe()}}
        />
      </div>
      <CategoryMenu />
      <SimpleRecipes />
    </Container>
  );
}

export default Home;
