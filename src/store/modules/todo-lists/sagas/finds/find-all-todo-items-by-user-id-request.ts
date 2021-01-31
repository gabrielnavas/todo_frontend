import { call, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsFindAll from '../../actions/finds/find-all'
import * as serviceFindAll from 'infra/services/find-all-todo-items-by-id-service'

export function * findAllTodoItemByUserIdRequestSaga (action: AnyAction) {
  try {
    const token = action.payload as actionsFindAll.ParamsRequest
    const resp = (
      yield call(serviceFindAll.findAllTodoItemsByIdService as any, token)
    ) as serviceFindAll.Result
    if (resp.errors.length > 0) {
      yield put(actionsFindAll.failure({ errors: resp.errors }))
      return
    }
    yield put(actionsFindAll.success({
      todoItemsLists: resp.body
    }))
  } catch (error) {
    yield put(actionsFindAll.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}
