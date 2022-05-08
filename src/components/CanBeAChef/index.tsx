import React from 'react';
import { Container } from './styles';
import beef from '../../assets/beef.svg';
import onion from '../../assets/onion.svg';
import lettuce from '../../assets/lettuce.svg';
import tomato from '../../assets/tomato.svg';
import Chef from '../../assets/chef.svg';

function CanBeAChef() {
  return (
    <Container>
      <div>
        <h1>
          Everyone can be a
          <br />
          chef in their own kitchen
        </h1>
        <p>
          Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqut enim ad minim
        </p>
        <button type="button">Learn More</button>
      </div>
      <div>
        <img className="chef" src={Chef} alt="chef" />
        <img className="beef" src={beef} alt="beef" />
        <img className="onion" src={onion} alt="onion" />
        <img className="lettuce" src={lettuce} alt="lettuce" />
        <img className="tomato" src={tomato} alt="tomato" />
      </div>
    </Container>
  );
}

export default CanBeAChef;
