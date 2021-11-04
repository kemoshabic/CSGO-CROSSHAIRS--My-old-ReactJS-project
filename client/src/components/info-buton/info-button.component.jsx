import React from "react";

import "./info-button.styles.scss";

export const InfoButton = ({img , purple, text, fix}) => {
  return (
    <div className={`${purple ? 'purple-btn' : ''} ${fix ? 'purble-btn__fix': ''} big-button`}>
      <img src={img} alt="copy" className="big-button__img" />
      <p className="big-button__text">{text}</p>
    </div>
  );
};

export default InfoButton;
