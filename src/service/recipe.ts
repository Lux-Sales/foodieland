import api from './api'
import JuicyHamburger from '../assets/juicy_hamburguer.png'
import ChickenBaconPasta from '../assets/chicken_bacon_pasta.png'
import ChickenRice from '../assets/chicken_rice.png'
import Meatballs from '../assets/meatballs.png'
import PancakeOrange from '../assets/pancake_orange.png'
import Pancake from '../assets/pancake.png'
import Salad from '../assets/salad.png'
import Salmon from '../assets/salmon.png'
import { SimpleRecipe } from '../components/SimpleRecipes'

export const getHotRecipes = async () => {
  return [
    {
      name: "Spicy Delicious chicken wings 1",
      description:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Explicabo labore voluptate, molestiae aliquid dolorem voluptates officiis dignissimos!",
      time: 30,
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
      time: 30,
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
      time: 30,
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
      time: 30,
      category: "Chicken",
      user: {
        name: "John Smith",
        avatar:"https://www.diethelmtravel.com/wp-content/uploads/2016/04/bill-gates-wealthiest-person.jpg"
      },
      postedDate: "15 March 2022",
    }
  ];
}


export  const getSimpleRecipes = async():Promise<SimpleRecipe[]> => {
  return [
      {
        name: "Big and Juicy Wagyu Beef Cheeseburger",
        time: 30,
        category: "Snack",
        favorited: true,
        photo: JuicyHamburger
      },
      {
        name: "Fresh Lime Roasted Salmon with Ginger Sauce",
        time: 30,
        category: "Fish",
        favorited: false,
        photo:Salmon
      },
      {
        name: "Strawberry Oatmeal Pancake with Honey Syrup",
        time: 30,
        category: "Sack",
        favorited: false,
        photo:Pancake
      },
      {
        name: "Fresh and Healthy Mixed Mayonnaise Salad",
        time: 30,
        category: "Healthy",
        favorited: true,
        photo:Salad
      },
      {
        name: "Chicken Meatballs with Cream Cheese",
        time: 30,
        category: "Meat",
        favorited: true,
        photo:Meatballs
      },
      {
        name: "Fruity Pancake with Orange & Blueberry",
        time: 30,
        category: "Sweet",
        favorited: true,
        photo:PancakeOrange
      },
      {
        name: "The Best Easy One Pot Chicken and Rice",
        time: 30,
        category: "Snack",
        favorited: false,
        photo: ChickenRice
      },
      {
        name: "The Creamiest Creamy Chicken and Bacon Pasta",
        time: 30,
        category: "Noodles",
        favorited: true,
        photo:ChickenBaconPasta
      },
    ];
}
