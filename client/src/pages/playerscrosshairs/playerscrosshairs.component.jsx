import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { selectFavoriteCrosshairs } from "../../redux/settings/settings.selector";
import { selectIfCopied } from "../../redux/settings/settings.selector";
import { removeCrosshair } from "../../redux/settings/settings.actions"

import Copy from '../../components/Copy/copy.component'
import PinkHeart from "../../assets/pink.png";

import "./playerscrosshairs.styles.scss";

export const PlayersCrosshairs = ({ savedCrosshairs, copied, removeCrosshair }) => {
  return (
    <div className="crosshair">
    <div className={`${copied && 'info__copied-succes'} info__copied`}> <p className="info__copied-text">{copied && 'Copied to clipboard'}</p></div>
      
    {savedCrosshairs.map(({ crosshair, id, name, team, imageUrl}) => (
        <div className="crosshair__wrap" key={id}>
          <img src={PinkHeart} alt="pink heart" />
          <h2 className="crosshair__heading">{name}</h2>
          <span className="crosshair__team">{team}</span>
          <Copy crosshair={crosshair}/>
          <div className="crosshair__img" style={{backgroundImage: `url(${imageUrl})`}}></div>
          <p className="crosshair__delete" onClick={() => removeCrosshair({ crosshair, id, name, team, imageUrl})}>Delete</p>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  savedCrosshairs: selectFavoriteCrosshairs,
  copied: selectIfCopied
});
const mapDispatchToProps = (dispatch) => ({
  removeCrosshair: settings => dispatch(removeCrosshair(settings)),
})


export default connect(mapStateToProps, mapDispatchToProps)(PlayersCrosshairs);
