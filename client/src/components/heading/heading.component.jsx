import React from "react";

import "./heading.styles.scss";

export const Heading = () => {
  return (
    <div className="heading">
      <h1 className="heading__primary">CSGO: Crosshairs</h1>
      <h2 className="heading__secondary">
        The place to find your favourite professional CS:GO crosshairs
      </h2>
      <div className="heading__steps">
        <div className="heading__box">
          <div className="heading__num">
            <span>1</span>
          </div>
          <p className="heading__box--text">Sign In</p>
        </div>

        <div className="heading__box">
          <div className="heading__num">
            <span>2</span>
          </div>
          <p className="heading__box--text">Search</p>
        </div>

        <div className="heading__box heading__box--purple">
          <div className="heading__num ">
            <span className="heading__num--purple">3</span>
          </div>
          <p className="heading__box--text">Save settings & crosshairs</p>
        </div>
      </div>
    </div>
  );
};

export default Heading;
