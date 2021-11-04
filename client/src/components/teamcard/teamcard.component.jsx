import React from "react";
import { connect } from "react-redux";
import { addPlayersInfo } from "../../redux/teams/teams.actions";

import "./teamcard.styles.scss";

export const TeamCard = ({ section, addPlayersInfo }) => {
  const { team, imageUrl, color, players, teamColor, teamsData } = section;
  return (
    <div className="directory-item">
      <div className="directory-item__heading-box " style={{ backgroundColor: `${color}` }}>
        <h3 className={`directory-item__heading ${ teamColor ? "directory-item__heading--black" : ""}`}>
          {team}
        </h3>
      </div>
      {players.map((item, i) => (
        <div key={i} id='test-id' className={`${ i % 2 === 0 ? "directory-item__grey-box" : "directory-item__white-box" }`}
          onClick={() => addPlayersInfo({ ...teamsData[i], team, imageUrl })}
        >
          <p className="directory-item__player">{players[i]}</p>
        </div>
      ))}
      <div className="directory-item__logo" style={{ backgroundImage: `url(${imageUrl})` }} />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addPlayersInfo: (info) => dispatch(addPlayersInfo(info)),
});

export default connect(null, mapDispatchToProps)(TeamCard);