import {
  request,
  success,
  ParamsSuccess,
  failure,
  ParamsFailure
} from './find-all'

import * as types from '../../../../configs/actions-reducer-types'

describe('actions/finds/find-all action ', () => {
  test('should return a action if request() is called with correct params', () => {
    const action = request()
    expect(action).toEqual({
      type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST
    })
  })

  test('should return a action if success() is called with correct params', () => {
    const params = {
      todoItemsLists: [
        [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' }
        ],
        [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
        ],
        [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
        ]
      ]
    } as ParamsSuccess
    const action = success(params)
    expect(action).toEqual({
      type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS,
      payload: params
    })
  })

  test('should return a action if failure() is called with correct params', () => {
    const params = {
      errors: ['any_error1', 'any_error2']
    } as ParamsFailure
    const action = failure(params)
    expect(action).toEqual({
      type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE,
      payload: params
    })
  })
})
