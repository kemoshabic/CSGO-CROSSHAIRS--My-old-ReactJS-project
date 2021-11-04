import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../assets/LogoMakr_0oEW5U.png";
import PinkHeart from "../../assets/icons8-heart-outline-48.svg";
import PurpleHeart from "../../assets/icons8-heart-outline-48-1.svg";
import Logo2 from '../../assets/logo black.png'

import "./navbar.styles.scss";

export const Navbar = () => {
  return (
    <div className="navbar">
      <Link className="navbar__img-box" to="/">
        <picture className="navbar__img-wrap">
          <source srcSet={Logo2} media="(max-width: 57.5em)"/>
          <img srcSet={Logo} alt="Logo"  className="navbar__img"/>
        </picture>
      </Link>
      <ul className="navbar__list">
        <li>
          <Link className="navbar__item" to="/players_crosshairs">
            <h3 className="navbar__text">Favorite Crosshairs</h3>
            <img className="navbar_hearts" src={PinkHeart} alt="hearts" />
          </Link>
        </li>
        <li>
          <Link className="navbar__item" to="/players_settings">
            <h3 className="navbar__text">Favorite Settings</h3>
            <img className="navbar__hearts" src={PurpleHeart} alt="hearts" />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
