import TeamsActionTypes from "./teams.types";
import teamsReducer from './teams.reducer'

const initialState = {
  teams: null,
  isFetching: false,
  errorMessage: undefined,
  playersInfo: false,
};

describe('teamsReducer', () => {
  it('should return initial state', () => {
    expect(teamsReducer(undefined, {})).toEqual(initialState);
  });

  it('should set isFetching to true if fetchingTeamsStart action', () => {
    expect(
      teamsReducer(initialState, {
        type: TeamsActionTypes.FETCH_TEAMS_START
      }).isFetching
    ).toBe(true);
  });

  it('should set isFetching to false and teams to payload if fetchingTeamsSuccess', () => {
    const mockItems = [{ id: 1 }, { id: 2 }];
    expect(
      teamsReducer(initialState, {
        type: TeamsActionTypes.FETCH_TEAMS_SUCCESS,
        payload: mockItems
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      teams: mockItems
    });
  });

  it('should set isFetching to false and errorMessage to payload if fetchingTeamsFailure', () => {
    expect(
      teamsReducer(initialState, {
        type: TeamsActionTypes.FETCH_TEAMS_FAILURE,
        payload: 'error'
      })
    ).toEqual({
      ...initialState,
      isFetching: false,
      errorMessage: 'error'
    });
  });
  it('should set playersInfo to payload if addPlayersInfo', () => {
    const mockPlayersInfo = { id: 1 }
    expect(
      teamsReducer(initialState, {
        type: TeamsActionTypes.ADD_PLAYERS_INFO,
        payload: mockPlayersInfo
      })
    ).toEqual({
      ...initialState,
      playersInfo: mockPlayersInfo
    });
  })

  it('should toggle playersInfo to hidden ', () => {
    const mockPreviusState = {
      teams: null,
      isFetching: false,
      errorMessage: undefined,
      playersInfo: false,
    };
    expect(
      teamsReducer(mockPreviusState, {
        type: TeamsActionTypes.TOGGLE_PLAYERS_INFO_HIDDEN,
        payload: null
      })
    ).toEqual({
      ...initialState,
      playersInfo: null
    });
  })
});