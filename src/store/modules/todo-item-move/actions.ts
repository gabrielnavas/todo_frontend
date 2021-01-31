import * as types from '../../configs/actions-reducer-types'

type TodoAreaIDPayLoad = string

type SetNewTodoItemPayLoad = {
  id?: number
  todoAreaID: TodoAreaIDPayLoad
  title: string
  description: string
}

export function setNewTodoItem (payload: SetNewTodoItemPayLoad) {
  return {
    type: types.todoItemMove.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM,
    payload
  }
}

export function setNullTodoItem () {
  return {
    type: types.todoItemMove.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM
  }
}
