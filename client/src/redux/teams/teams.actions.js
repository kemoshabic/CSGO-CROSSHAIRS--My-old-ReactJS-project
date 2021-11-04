import TeamsActionTypes from "./teams.types";

export const fetchTeamsStart = () => ({
  type: TeamsActionTypes.FETCH_TEAMS_START,
});

export const fetchTeamsSuccess = teamsMap => ({
  type: TeamsActionTypes.FETCH_TEAMS_SUCCESS,
  payload: teamsMap
})

export const fetchTeamsFailure = errorMessage => ({
  type: TeamsActionTypes.FETCH_TEAMS_FAILURE,
  payload: errorMessage
})

export const addPlayersInfo = info => ({
  type: TeamsActionTypes.ADD_PLAYERS_INFO,
  payload: info,
})

export const togglePlayersInfoHidden = () => ({
  type: TeamsActionTypes.TOGGLE_PLAYERS_INFO_HIDDEN
})