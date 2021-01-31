import { call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsInsertOneTodoItem from '../../actions/inserts/insert-one-todo-item'
import * as serviceInsertOne from 'infra/services/insert-one-todo-item-service'
import { ReducersType } from 'store/configs/root-reducer'

export function * insertOneTodoItemRequestSaga (action: AnyAction) {
  const payload = action.payload as actionsInsertOneTodoItem.ParamsRequest
  const token = yield select((state:ReducersType) => state.auth.token)
  try {
    const params = {
      todoItem: payload,
      userTokenAccess: token
    } as serviceInsertOne.Params
    const resp = (yield call(serviceInsertOne.insertOneTodoItemService, params)) as serviceInsertOne.Result
    if (resp.errors.length > 0) {
      yield put(actionsInsertOneTodoItem.failure({ errors: resp.errors }))
      return
    }
    yield put(actionsInsertOneTodoItem.success({ todoItem: resp.body }))
  } catch (error) {
    yield put(actionsInsertOneTodoItem.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}
