import React from "react";
import { Link } from 'react-router-dom'

import "./homepage.styles.scss";

import Heading from "../../components/heading/heading.component";
import Directory from "../../components/directory/directory.component";
import Sign from '../../assets/right.png'

export const HomePage = () => {
  return (
    <div className="homepage-wrapper">
      <Heading />
      <div className="cards-wrapper">
        <h3 className="cards-wrapper__header">Most popular teams</h3>
        <Directory />
        <Link to="/players" className="cards-wrapper__other-teams">
          <h3 className="cards-wrapper__green">See all teams</h3>
          <img src={Sign} alt="sign"/>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
