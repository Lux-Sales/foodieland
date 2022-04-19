import React from "react";
import { Container } from "./styles";
import BreakfastIcon from '../../assets/breakfast_icon.svg'
import VeganIcon from '../../assets/vegan_icon.svg'
import MeatIcon from '../../assets/meat_icon.svg'
import DessertIcon from '../../assets/dessert_icon.svg'
import LunchIcon from '../../assets/lunch_icon.svg'
import ChocolateIcon from '../../assets/chocolate_icon.svg'

function CategoryMenu() {
  return (
    <Container>
      <header>
        <h1>Categories</h1>
        <button>View All Categories</button>
      </header>
      <nav>
        <ul>
          <li style={{backgroundImage:"linear-gradient(to top, #F6F7F3, #fff)"}}>
            <img src={BreakfastIcon} alt="BreakfastIcon" />
            <span>Breakfast</span>
          </li>
          <li style={{backgroundImage:"linear-gradient(to top, #F1FAED, #fff)"}}>
            <img src={VeganIcon} alt="" />
            <span>Vegan</span>
          </li>
          <li style={{backgroundImage:"linear-gradient(to top, #F4D9D7, #fff)"}}>
            <img src={MeatIcon} alt="" />
            <span>Meat</span>
          </li>
          <li style={{backgroundImage:"linear-gradient(to top, #FAF2E1, #fff)"}}>
            <img src={DessertIcon} alt="" />
            <span>Dessert</span>
          </li>
          <li style={{backgroundImage:"linear-gradient(to top, #F3F3F3, #fff)"}}>
            <img src={LunchIcon} alt="" />
            <span>Lunch</span>
          </li>
          <li style={{backgroundImage:"linear-gradient(to top, #F8F8F8, #fff)"}}>
            <img src={ChocolateIcon} alt="" />
            <span>Chocolate</span>
          </li>
        </ul>
      </nav>
    </Container>
  );
}

export default CategoryMenu;
