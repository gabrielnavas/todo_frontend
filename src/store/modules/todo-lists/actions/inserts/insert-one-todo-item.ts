import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export type ParamsRequest = Omit<TodoItemModel, 'id'>
export const request = (payload: ParamsRequest) => ({
  type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST,
  payload
})

export type ParamsSuccess = { todoItem: TodoItemModel }
export const success = (payload: ParamsSuccess) => ({
  type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS,
  payload
})

export type ParamsFailure = { errors: string[] }
export const failure = (payload: ParamsFailure) => ({
  type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE,
  payload
})
