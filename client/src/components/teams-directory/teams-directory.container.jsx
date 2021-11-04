import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { compose } from "redux";

import { selectAreTeamsFetching } from "../../redux/teams/teams.selector";
import WithSpinner from "../with-spinner/with-spinner.component";
import TeamsDirectory from "./teams-directory.component";

const mapStateToProps = createStructuredSelector({
  isFetching: selectAreTeamsFetching,
});

const TeamsDirectoryContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(TeamsDirectory);

export default TeamsDirectoryContainer;
