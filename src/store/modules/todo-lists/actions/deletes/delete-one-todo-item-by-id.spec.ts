import {
  request,
  ParamsRequest,
  failure,
  ParamsFailure,
  success,
  ParamsSuccess
} from './delete-one-todo-item-by-id'

import * as types from '../../../../configs/actions-reducer-types'

describe('actions/deletes/delete-one-todo-item-by-id action ', () => {
  test('should return a action if request() is called with correct params', () => {
    const params = {
      todoAreaID: 'todo',
      todoItemID: 1
    } as ParamsRequest
    const action = request(params)
    expect(action).toEqual({
      type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST,
      payload: params
    })
  })

  test('should return a action if success() is called with correct params', () => {
    const params = {
      todoAreaID: 'todo',
      todoItemID: 1
    } as ParamsSuccess
    const action = success(params)
    expect(action).toEqual({
      type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS,
      payload: params
    })
  })

  test('should return a action if failure is called with correct params', () => {
    const params = {
      errors: ['any_error1', 'any_error2']
    } as ParamsFailure
    const action = failure(params)
    expect(action).toEqual({
      type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE,
      payload: params
    })
  })
})
