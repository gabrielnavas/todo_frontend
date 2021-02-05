import {
  request
} from './clear-all'

import * as types from '../../../../configs/actions-reducer-types'

describe('actions/deletes/delete-one-todo-item-by-id action ', () => {
  test('should return a action if request() is called with correct params', () => {
    const action = request()
    expect(action).toEqual({
      type: types.todoLists.deletes.TODOS_LISTS__CLEAR_ALL__REQUEST
    })
  })
})
