import { call, put } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsDeleteOneTodoItemById from '../../actions/deletes/delete-one-todo-item-by-id'
import * as serviceDelete from 'infra/services/delete-one-todo-item-by-id-service'

export function * deleteOneTodoItemByIdRequestSaga (action: AnyAction) {
  const { todoItemID, todoAreaID } = action.payload as actionsDeleteOneTodoItemById.ParamsRequest
  try {
    const resp = (yield call(serviceDelete.deleteOneTodoItemByIdService as any, todoAreaID)) as serviceDelete.Result
    if (resp.errors.length > 0) {
      yield put(actionsDeleteOneTodoItemById.failure({ errors: resp.errors }))
      return
    }
    yield put(actionsDeleteOneTodoItemById.success({ todoAreaID, todoItemID }))
  } catch (error) {
    yield put(actionsDeleteOneTodoItemById.failure({
      errors: ['Serviço indisponível, tente novamente mais tarde.']
    }))
  }
}
