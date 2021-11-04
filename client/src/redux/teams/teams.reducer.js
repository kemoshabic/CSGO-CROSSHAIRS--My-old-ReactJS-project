import TeamsActionTypes from "./teams.types";

const INITIAL_STATE = {
  teams: {},
  isFetching: false,
  errorMessage: undefined,
  playersInfo: false,
};

const teamsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TeamsActionTypes.ADD_PLAYERS_INFO:
      return {
        ...state,
        playersInfo: action.payload
      };
    case TeamsActionTypes.TOGGLE_PLAYERS_INFO_HIDDEN:
      return{
        ...state,
        playersInfo: null,
      }
    case TeamsActionTypes.FETCH_TEAMS_START:
      return {
        ...state,
        isFetching: true,
      };
    case TeamsActionTypes.FETCH_TEAMS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        teams: action.payload,
      };
    case TeamsActionTypes.FETCH_TEAMS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
};

export default teamsReducer;
