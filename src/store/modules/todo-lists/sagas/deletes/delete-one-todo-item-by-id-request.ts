import { call, put, select } from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actionsDeleteOneTodoItemById from '../../actions/deletes/delete-one-todo-item-by-id'
import * as serviceDelete from 'infra/services/delete-one-todo-item-by-id-service'
import { ReducersType } from 'store/configs/root-reducer'

export function * deleteOneTodoItemByIdRequestSaga (action: AnyAction) {
  const { todoItemID, todoAreaID } = action.payload as actionsDeleteOneTodoItemById.ParamsRequest
  const token = yield select((state:ReducersType) => state.auth.token)
  const serviceParams = {
    todoItemID,
    userTokenAccess: token
  } as serviceDelete.Params
  try {
    const resp = (yield call(
      serviceDelete.deleteOneTodoItemByIdService as any, serviceParams)) as serviceDelete.Result
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
