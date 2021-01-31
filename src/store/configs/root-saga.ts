import { all } from 'redux-saga/effects'
import { sagas as auth } from '../modules/auth/sagas'
import { sagas as todoLists } from '../modules/todo-lists/sagas'

export function * rootSaga () {
  return yield all([
    auth,
    todoLists
  ])
}
