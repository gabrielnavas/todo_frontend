import {
  request,
  ParamsRequest,
  success,
  ParamsSuccess,
  failure,
  ParamsFailure
} from './insert-one-todo-item'

import * as types from '../../../../configs/actions-reducer-types'

describe('actions/updates/update-one-todo-item-by-id action ', () => {
  test('should return a action if request() is called with correct params', () => {
    const params = {
      description: 'any_description',
      title: 'any_title',
      todoAreaID: 'todo'
    } as ParamsRequest
    const action = request(params)
    expect(action).toEqual({
      type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST,
      payload: params
    })
  })

  test('should return a action if success() is called with correct params', () => {
    const params = {
      todoItem: {
        id: 1,
        description: 'any_description',
        title: 'any_title',
        todoAreaID: 'todo'
      }
    } as ParamsSuccess
    const action = success(params)
    expect(action).toEqual({
      type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS,
      payload: params
    })
  })

  test('should return a action if failure() is called with correct params', () => {
    const params = {
      errors: ['any_error1', 'any_error2']
    } as ParamsFailure
    const action = failure(params)
    expect(action).toEqual({
      type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE,
      payload: params
    })
  })
})
