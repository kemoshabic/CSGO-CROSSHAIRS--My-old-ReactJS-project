import React from "react";

import "./settings-overview.styles.scss";

import Headset from "../../assets/headset.png";

import Mouse from "../../assets/mouse-clicker.png";
import Keyboard from "../../assets/gaming.png";
import MousePad from "../../assets/virtual-reality.png";
import Monitor from "../../assets/television.png";

export const Settings = ({
  settings: { headset, keyboard, monitor, mouse, mousepad },
}) => {
  return (
    <div className="overview settings__show">
      <div className="overview__item">
        <div className="overview__upper">
          <img src={Headset} alt="heart" />
          <h3 className="overview__heading">Headset</h3>
        </div>
        <div className="overview__lower">
          <p className="overview__text">{headset}</p>
        </div>
      </div>
      <div className="overview__item">
        <div className="overview__upper">
          <img src={Monitor} alt="heart" />
          <h3 className="overview__heading">Monitor</h3>
        </div>
        <div className="overview__lower">
          <p className="overview__text">{monitor}</p>
        </div>
      </div>
      <div className="overview__item">
        <div className="overview__upper">
          <img src={Mouse} alt="heart" />
          <h3 className="overview__heading">Mouse</h3>
        </div>
        <div className="overview__lower">
          <p className="overview__text">{mouse}</p>
        </div>
      </div>
      <div className="overview__item">
        <div className="overview__upper">
          <img src={Keyboard} alt="heart" />
          <h3 className="overview__heading">Keyboard</h3>
        </div>
        <div className="overview__lower">
          <p className="overview__text">{keyboard}</p>
        </div>
      </div>
      <div className="overview__item">
        <div className="overview__upper">
          <img src={MousePad} alt="heart" />
          <h3 className="overview__heading">MousePad</h3>
        </div>
        <div className="overview__lower">
          <p className="overview__text">{mousepad}</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
