import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { Link } from "react-router-dom";

import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from '../../redux/user/user.actions'

import { ReactComponent as ExitLogo } from "../../assets/logout.svg";

import "./header.styles.scss";

export const Header = ({ currentUser, signOutStart}) => {
  return (
    <div className='header'>
      <div className="blur"></div>
      <Link className="header__text header__text-red" to="/players">
        TEAMS & PLAYERS CROSSHAIRS
      </Link>
      <a
        className="header__text"
        href="https://csgoresolutions.com/"
        target="_blank"
        rel="noopener noreferrer"
      >
        CSGO RESOLUTIONS
      </a>
      <Link className="header__text" to="/">
        FAQ
      </Link>
      {currentUser ? (
        <div onClick={signOutStart} className="header__signout">
          <span href="#" className="header__text header__text-signin">Sign Out</span>
          <ExitLogo className="header__signout--logo" />
        </div>
      ) : (
        <Link className="header__text header__text-signin" to="/signin">
          Sign In &#8594;
        </Link>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

const mapDispatchToProps = (dispatch) => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(Header);
