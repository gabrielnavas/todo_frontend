import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as types from '../../../../configs/actions-reducer-types'

import {
  UpdateOneTodoItemByIDFailure,
  UpdateOneTodoItemByIDSuccess

} from '../../actions/updates/update-one-todo-item-by-id'
import { UpdateOneTodoItemService } from 'infra/services/update-one-todo-item-by-id-service'

export function * updateOneTodoItemByIDRequestSaga (action: AnyAction) {
  const payload = action.payload as UpdateOneTodoItemByIDSuccess.Params
  try {
    const resp = (yield call(UpdateOneTodoItemService.service, payload.todoItem)) as UpdateOneTodoItemService.Result
    if (resp.errors.length > 0) {
      yield put(UpdateOneTodoItemByIDFailure.failure({ errors: resp.errors }))
      return
    }
    yield put(UpdateOneTodoItemByIDSuccess.success({
      oldTodoItem: payload.oldTodoItem,
      todoItem: payload.todoItem
    }))
  } catch (error) {
    yield put(UpdateOneTodoItemByIDFailure.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}

export const sagas = all([
  takeLatest(
    types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST,
    insertOneTodoItemRequestSaga
  )
])
