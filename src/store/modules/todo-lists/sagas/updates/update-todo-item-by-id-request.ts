import { call, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsUpdateOne from '../../actions/updates/update-one-todo-item-by-id'
import * as serviceOneTodo from 'infra/services/update-one-todo-item-by-id-service'

export function * updateOneTodoItemByIDRequestSaga (action: AnyAction) {
  const payload = action.payload as actionsUpdateOne.ParamsRequest
  try {
    const resp = (yield call(serviceOneTodo.updateOneTodoItemByIdservice, payload.todoItem)) as serviceOneTodo.Result
    if (resp.errors.length > 0) {
      yield put(actionsUpdateOne.failure({ errors: resp.errors }))
      return
    }
    yield put(actionsUpdateOne.success({
      oldTodoItem: payload.oldTodoItem,
      todoItem: payload.todoItem
    }))
  } catch (error) {
    yield put(actionsUpdateOne.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}
