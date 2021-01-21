import { all } from 'redux-saga/effects'
import { sagas as authSagas } from '../modules/auth/sagas'

export function * rootSaga () {
  return yield all([
    authSagas
  ])
}
