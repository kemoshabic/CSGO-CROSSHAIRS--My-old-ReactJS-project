import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectExistingError } from '../../redux/user/user.selectors'
import { togglePopUp } from "../../redux/user/user.actions"

import Error from '../../assets/error.png'
import CloseButton from '../../assets/x-button.png'

import './popup.styles.scss';

export const PopUp = ({ togglePopUp, error }) => {
  return (
   <div className="error">
     <div className="error__box-1">
       <img src={Error} alt="error button" className="error__img"/>
       <img src={CloseButton} alt="close button" onClick={togglePopUp} className="error__close"/>
    </div>
    <div className="error__box-2">
       <p className="error__main-text">Oh snap!</p>
       <p className="error__text">{error.message}</p>
    </div>
   </div>
  );
 }

const mapStateToProps = createStructuredSelector({
  error: selectExistingError,
})

const mapDispatchToProps = (dispatch) => ({
  togglePopUp: () => dispatch(togglePopUp())
})

export default connect(mapStateToProps, mapDispatchToProps)(PopUp)