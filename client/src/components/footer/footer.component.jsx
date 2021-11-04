import React from 'react';

import Twitter from '../../assets/icons8-twitter-96 (1).png'
import GitHub from '../../assets/icons8-github-60 (1).png'
import { ReactComponent as Facebook } from "../../assets/icons8-facebook.svg";

import './footer.styles.scss';

export const Footer = () => {
  return (
    <div className="footer">
      <h2 className="footer__text">© 2020 CSGOCrosshairs.herokuapp.com made with love</h2>
      <div className="footer__links">
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" ><img src={Twitter} alt=""/></a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer"><img src={GitHub} alt=""/></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__link"><Facebook /></a>
      </div>
    </div>
  )
}
export default Footer