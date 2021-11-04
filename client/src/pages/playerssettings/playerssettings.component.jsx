import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import Settings from "../../components/settings-overview/settings-overview.component";
import { selectFavoriteSettings } from "../../redux/settings/settings.selector";
import { removeSettings } from "../../redux/settings/settings.actions"

import PurpleHeart from "../../assets/purple.png";

import "./playerssettings.styles.scss";

export const PlayersSettings = ({ savedSettings, removeSettings }) => {
  return (
    <div className="settings">
      {savedSettings.map(({ team, name, id, settings }) => (
        <div className="settings__block" key={id}>
          <div className="settings__top">
            <img src={PurpleHeart} alt="hey" className="smh" />
            <h2 className="settings__heading">{name}</h2>
            <span className="settings__team">{team}</span>
            <p className="settings__delete" onClick={() => removeSettings({team, name, id, settings})}>Delete</p>
          </div>
          <Settings settings={settings}/>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  savedSettings: selectFavoriteSettings,
});

const mapDispatchToProps = (dispatch) => ({
  removeSettings: settings => dispatch(removeSettings(settings)),
})


export default connect(mapStateToProps, mapDispatchToProps)(PlayersSettings);
