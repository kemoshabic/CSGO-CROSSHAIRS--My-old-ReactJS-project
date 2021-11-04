import React from "react";

import GhostImg from '../../assets/ghost.png'

import './error-boundary.styles.scss'

class ErrorBoundary extends React.Component {
  constructor() {
    super();

    this.state = {
      hasErrored: false,
    };
  }

  static getDerivedStateFromError(error) {
    return { hasErrored: true};
  }

  componentDidCatch(error, info){
    console.log(error);
  }

  render(){
    if(this.state.hasErrored){
        return (
            <div className="error" >
              <h1 className="error__text">This page is ghost</h1>
              <img src={GhostImg} alt="Error" className="error__image"/>
            </div>
        )
    }

    return this.props.children;
  }

}

export default ErrorBoundary;
