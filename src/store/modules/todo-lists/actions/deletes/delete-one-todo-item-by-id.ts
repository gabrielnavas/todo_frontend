import { TodoAreaID, TodoItemID } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export type ParamsRequest = {
  todoItemID: TodoItemID,
  todoAreaID: TodoAreaID
}
export const request = (payload: ParamsRequest) => ({
  type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST,
  payload
})

export type ParamsSuccess = {
  todoItemID: TodoItemID,
  todoAreaID: TodoAreaID
}
export const success = (payload: ParamsSuccess) => ({
  type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS,
  payload
})

export type ParamsFailure = { errors: string[] }
export const failure = (payload: ParamsFailure) => ({
  type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE,
  payload
})
