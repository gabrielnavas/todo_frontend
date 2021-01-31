import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export type ParamsSuccess ={
    todoItem: TodoItemModel
    oldTodoItem: TodoItemModel
  }
export const success = (payload: ParamsSuccess) => ({
  type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS,
  payload
})

export type ParamsRequest ={
    todoItem: TodoItemModel
    oldTodoItem: TodoItemModel
  }
export const request = (payload: ParamsRequest) => ({
  type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST
})

export type ParamsFailure = { errors: string[] }
export const failure = (payload: ParamsFailure) => ({
  type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE,
  payload
})
