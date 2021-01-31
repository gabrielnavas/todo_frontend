import { call, put, all, takeLatest } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as types from '../../../../configs/actions-reducer-types'

import {
  FindAllTodoItemsFailure,
  FindAllTodoItemsRequest,
  FindAllTodoItemsSuccess
} from '../../actions/finds/finds-all'
import {
  FindAllTodoItemsByIdService
} from 'infra/services/find-all-todo-items-by-id-service'

export function * findAllTodoItemByUserIdRequestSaga (action: AnyAction) {
  try {
    const token = action.payload as FindAllTodoItemsRequest.Params
    const resp = (
      yield call(FindAllTodoItemsByIdService.service as any, token)
    ) as FindAllTodoItemsByIdService.Result
    if (resp.errors.length > 0) {
      yield put(FindAllTodoItemsFailure.failure({ errors: resp.errors }))
      return
    }
    yield put(FindAllTodoItemsSuccess.success({
      todoItemsLists: resp.body
    }))
  } catch (error) {
    yield put(FindAllTodoItemsFailure.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}

export const sagas = all([
  takeLatest(
    types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST,
    findAllTodoItemByUserIdRequestSaga
  )
])
