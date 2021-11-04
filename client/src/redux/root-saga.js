import { all, call } from 'redux-saga/effects';

import { userSagas } from './user/user.sagas'
import { teamsSagas } from './teams/teams.sagas'

export default function* rootSaga(){
  yield all([
    call(userSagas),
    call(teamsSagas)
]);
}