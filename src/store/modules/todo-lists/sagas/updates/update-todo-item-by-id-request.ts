import { call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsUpdateOne from '../../actions/updates/update-one-todo-item-by-id'
import * as serviceOneTodo from 'infra/services/update-one-todo-item-by-id-service'
import { ReducersType } from 'store/configs/root-reducer'

export function * updateOneTodoItemByIDRequestSaga (action: AnyAction) {
  const { todoItem: todoItemUpdated, oldTodoItem } = action.payload as actionsUpdateOne.ParamsRequest
  const token = yield select((state:ReducersType) => state.auth.token)
  const serviceParams = {
    todoItem: todoItemUpdated,
    userTokenAccess: token
  } as serviceOneTodo.Params
  try {
    const resp = (yield call(
      serviceOneTodo.updateOneTodoItemByIdservice, serviceParams
    )) as serviceOneTodo.Result
    if (resp.errors.length > 0) {
      yield put(actionsUpdateOne.failure({ errors: resp.errors }))
      return
    }
    yield put(actionsUpdateOne.success({
      oldTodoItem: oldTodoItem,
      todoItem: todoItemUpdated
    }))
  } catch (error) {
    yield put(actionsUpdateOne.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}
