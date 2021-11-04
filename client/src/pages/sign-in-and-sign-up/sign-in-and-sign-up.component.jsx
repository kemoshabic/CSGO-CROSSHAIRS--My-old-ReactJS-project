import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import "./sign-in-and-sign-up.styles.scss";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";
import PopUp from "../../components/popup/popup.component";

import { selectExistingError } from "../../redux/user/user.selectors";

export const SignInAndSignUpPage = ({ error }) => {
  return (
    <div>
      {error ? <PopUp /> : null}
      <div className="sign-in-and-sign-up">
        <SignIn />
        <SignUp />
      </div>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  error: selectExistingError,
});


export default connect(mapStateToProps)(SignInAndSignUpPage);
