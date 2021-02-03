import {
  request,
  ParamsRequest,
  success,
  ParamsSuccess,
  failure,
  ParamsFailure
} from './update-one-todo-item-by-id'

import * as types from '../../../../configs/actions-reducer-types'

describe('actions/updates/update-one-todo-item-by-id action ', () => {
  test('should return a action if request() is called with correct params', () => {
    const params = {
      oldTodoItem: { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
      todoItem: { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
    } as ParamsRequest
    const action = request(params)
    expect(action).toEqual({
      type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST,
      payload: params
    })
  })

  test('should return a action if success() is called with correct params', () => {
    const params = {
      oldTodoItem: { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
      todoItem: { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
    } as ParamsSuccess
    const action = success(params)
    expect(action).toEqual({
      type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS,
      payload: params
    })
  })

  test('should return a action if failure() is called with correct params', () => {
    const params = {
      errors: ['any_error1', 'any_error2']
    } as ParamsFailure
    const action = failure(params)
    expect(action).toEqual({
      type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE,
      payload: params
    })
  })
})
