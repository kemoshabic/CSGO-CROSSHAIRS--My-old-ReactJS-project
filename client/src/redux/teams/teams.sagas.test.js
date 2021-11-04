import { takeLatest, call, put } from 'redux-saga/effects';

import {
  firestore,
  convertTeamsSnapshotToMap,
} from "../../firebase/firebase.utils";

import { fetchTeamsSuccess, fetchTeamsFailure } from './teams.actions';

import TeamsActionTypes from "./teams.types";

import { fetchTeamsStart, fetchTeamsAsync } from './teams.sagas';




describe('fetch teams start saga', () => {
  it('should trigger on FETCH_TEAMS_START', () => {
    const generator = fetchTeamsStart();
    expect(generator.next().value).toEqual(
      takeLatest(TeamsActionTypes.FETCH_TEAMS_START, fetchTeamsAsync)
    );
  });
});


describe('fetch teams async saga', () => {
  const generator = fetchTeamsAsync();

  it('should call firestore teams ', () => {
    const getCollection = jest.spyOn(firestore, 'collection');
    generator.next();
    expect(getCollection).toHaveBeenCalled();
  });

  it('should call convertCollectionsSnapshot saga ', () => {
    const mockSnapshot = {};
    expect(generator.next(mockSnapshot).value).toEqual(
      call(convertTeamsSnapshotToMap, mockSnapshot)
    );
  });

  it('should fire fetchTeamsSuccess if teamsMap is succesful', () => {
    const mockTeamsMap = {
      astralis: { id: 1 }
    };

    expect(generator.next(mockTeamsMap).value).toEqual(
      put(fetchTeamsSuccess(mockTeamsMap))
    );
  });

  it('should fire fetchTeamsFailure if get team fails at any point', () => {
    const newGenerator = fetchTeamsAsync();
    newGenerator.next();
    expect(newGenerator.throw({ message: 'error' }).value).toEqual(
      put(fetchTeamsFailure('error'))
    );
  });
});