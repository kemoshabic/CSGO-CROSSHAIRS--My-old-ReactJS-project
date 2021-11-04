import { createSelector } from 'reselect';

const selectTeamsData = (state) => state.teamsData;

export const selectTeams = createSelector(
  [selectTeamsData],
  (teamsData) => teamsData.teams
);

export const selectPlayersInfo = createSelector(
  [selectTeamsData],
  (teamsData) => teamsData.playersInfo
);

export const selectTeamsForPreview = createSelector(
  [selectTeams],
  (teams) => teams ? Object.keys(teams).map((key) => teams[key]) :  []
);

export const selectAreTeamsFetching = createSelector(
  [selectTeams],
  (teams) => teams.isFetching
)