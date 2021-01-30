import { call, put, all, takeLatest } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as types from '../../../../configs/actions-reducer-types'

import {
  DeleteItemByTodoItemIDSuccess,
  DeleteItemByTodoItemIDFailure
} from '../../actions/deletes/delete-item-by-todo-item-id'
import {
  DeleteOneTodoItemByIdService
} from 'infra/services/delete-one-todo-item-by-id-service'

export function * deleteOneTodoItemByIdRequestSaga (action: AnyAction) {
  const { todoItemID, todoAreaID } = action.payload as DeleteItemByTodoItemIDSuccess.Params
  try {
    const resp = (yield call(DeleteOneTodoItemByIdService.service as any, todoAreaID)) as DeleteOneTodoItemByIdService.Result
    if (resp.errors.length > 0) {
      yield put(DeleteItemByTodoItemIDFailure.failure({ errors: resp.errors }))
      return
    }
    yield put(DeleteItemByTodoItemIDSuccess.success({ todoAreaID, todoItemID }))
  } catch (error) {
    yield put(DeleteItemByTodoItemIDFailure.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}

export const sagas = all([
  takeLatest(
    types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST,
    deleteOneTodoItemByIdRequestSaga
  )
])
