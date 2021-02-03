import { setNewTodoItem, setNullTodoItem } from './actions'
import * as types from '../../configs/actions-reducer-types'

describe('todo-item-move/actions', () => {
  test('should call setNewTodoItem() and return a correct action', () => {
    const payload = {
      id: 1,
      todoAreaID: 'todo',
      title: 'title',
      description: 'description'
    }
    const action = setNewTodoItem(payload)
    expect(action).toEqual({
      type: types.todoItemMove.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM,
      payload
    })
  })

  test('should call setNewTodoItem() and return a correct action', () => {
    const action = setNullTodoItem()
    expect(action).toEqual({
      type: types.todoItemMove.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM
    })
  })
})
