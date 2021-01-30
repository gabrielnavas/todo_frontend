import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as types from '../../../../configs/actions-reducer-types'

import {
  InsertOneTodoItemFailure,
  InsertOneTodoItemRequest,
  InsertOneTodoItemSuccess
} from '../../actions/inserts/insert-one-todo'
import { InsertOneTodoItemService } from 'infra/services/insert-one-todo-item-service'

export function * insertOneTodoItemRequestSaga (action: AnyAction) {
  const payload = action.payload as InsertOneTodoItemRequest.Params
  try {
    const resp = (yield call(InsertOneTodoItemService.service, payload.todoItem)) as InsertOneTodoItemService.Result
    if (resp.errors.length > 0) {
      yield put(InsertOneTodoItemFailure.failure({ errors: resp.errors }))
      return
    }
    yield put(InsertOneTodoItemSuccess.success({ todoItem: resp.body }))
  } catch (error) {
    yield put(InsertOneTodoItemFailure.failure({
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
