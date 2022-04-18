import React from "react";
import { Container } from "./styles";
import logo from "../../assets/Foodieland-logo.png";
import facebookLogo from "../../assets/facebook-icon.png";
import twitterLogo from "../../assets/twitter-icon.png";
import instagramLogo from "../../assets/instagram-icon.png";

function Header() {
  return (
    <>
      <Container>
        <a href="/">
        <img src={logo} alt="logo" />
        </a>
        <nav>
          <ul className="nav-ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/recipies">Recipies</a>
            </li>
            <li>
              <a href="/blog">Blog</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/about">About us</a>
            </li>
          </ul>
        </nav>
        <nav>
          <ul className="social-media-ul">
            <li>
              <a href="">
              <img src={facebookLogo} alt="facebook-logo" />
              </a>
            </li>
            <li>
              <a href="">
              <img src={twitterLogo} alt="twitter-logo" />
              </a>
            </li>
            <li>
              <a href="">
              <img src={instagramLogo} alt="instagram-logo" />
              </a>
            </li>
          </ul>
        </nav>
      </Container>
    </>
  );
}

export default Header;
