import React from "react";
import { connect } from "react-redux";

import { createStructuredSelector } from "reselect";

import TeamCard from "../teamcard/teamcard.component";

import { selectTeamsForPreview } from "../../redux/teams/teams.selector";

import "./teams-directory.styles.scss";

export const TeamsDirectory = ({ teams }) => {
  return (
    <div className="teams-menu">
      {teams.map((section) => (
        <TeamCard key={section.id} section={section} />
      ))}
    </div>
  );
};
const mapStateToProps = createStructuredSelector({
  teams: selectTeamsForPreview,
});

export default connect(mapStateToProps)(TeamsDirectory);
