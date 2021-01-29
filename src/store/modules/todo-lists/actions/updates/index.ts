import * as types from '../../../../configs/actions-reducer-types'
import { TodoData } from 'pages/todo/components/todo-item'
import { TodoAreaID } from 'pages/todo/components/todo-list'

export type PayloadUpdateOneTodoItemByTodoAreaID = {
  todoAreaIDToInsert: TodoAreaID
  todoItemMove: TodoData
}

export type PayloadUpdateOneTodoItemByID = {
  todoItem: TodoData
  oldTodoItemID: TodoAreaID
}

export function updateOneTodoItemByID (payload: PayloadUpdateOneTodoItemByID) {
  return {
    type: types.todoLists.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID,
    payload
  }
}

export function updateOneTodoItemByTodoAreaID (payload: PayloadUpdateOneTodoItemByTodoAreaID) {
  return {
    type: types.todoLists.TODOS_LISTS__UPDATE_TODO_ITEM_BY_TODO_AREA_ID,
    payload
  }
}
