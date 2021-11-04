import TeamsActionTypes from "./teams.types";
import {
  fetchTeamsStart,
  fetchTeamsSuccess,
  fetchTeamsFailure,
  addPlayersInfo,
  togglePlayersInfoHidden
} from './teams.actions';

describe('fetchTeamsStart action', () => {
  it('should create the fetchTeamsStart action', () => {
    expect(fetchTeamsStart().type).toEqual(
      TeamsActionTypes.FETCH_TEAMS_START
    );
  });
});

describe('fetchTeamsSuccess action', () => {
  it('should create the fetchTeamsSuccess action', () => {
    const mockTeamsMap = {
      astralis: {
        id: 1
      }
    };

    const action = fetchTeamsSuccess(mockTeamsMap);

    expect(action.type).toEqual(TeamsActionTypes.FETCH_TEAMS_SUCCESS);
    expect(action.payload).toEqual(mockTeamsMap);
  });
});

describe('fetchTeamsFailure action', () => {
  it('should create the fetchTeamsFailure action', () => {
    const action = fetchTeamsFailure('errored');

    expect(action.type).toEqual(TeamsActionTypes.FETCH_TEAMS_FAILURE);
    expect(action.payload).toEqual('errored');
  });
});


describe('addPlayersInfo action', () => {
  it('should create the addPlayersInfo action', () => {
    expect(addPlayersInfo().type).toEqual(
      TeamsActionTypes.ADD_PLAYERS_INFO
    );
  });
});

describe('togglePlayersInfoHidden action', () => {
  it('should create the togglePlayersInfoHidden action', () => {
    expect(togglePlayersInfoHidden().type).toEqual(
      TeamsActionTypes.TOGGLE_PLAYERS_INFO_HIDDEN
    );
  });
});