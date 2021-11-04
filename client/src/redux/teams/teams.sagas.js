import { takeLatest, call, put, all } from "redux-saga/effects";

import TeamsActionTypes from "./teams.types";

import {
  firestore,
  convertTeamsSnapshotToMap,
} from "../../firebase/firebase.utils";


import {
  fetchTeamsSuccess,
  fetchTeamsFailure,
} from "./teams.actions";

export function* fetchTeamsAsync() {

  try {
    const teamsRef = firestore.collection("teams");
    const snapshot = yield teamsRef.get();
    console.log(snapshot)
    const teamsMap = yield call(convertTeamsSnapshotToMap, snapshot);
    yield put(fetchTeamsSuccess(teamsMap))
  } catch (err) {
    yield put(fetchTeamsFailure(err.message));
  }
}

export function* fetchTeamsStart() {
  yield takeLatest(
    TeamsActionTypes.FETCH_TEAMS_START,
    fetchTeamsAsync
  );
}

export function* teamsSagas(){
  yield all([call(fetchTeamsStart)])
}