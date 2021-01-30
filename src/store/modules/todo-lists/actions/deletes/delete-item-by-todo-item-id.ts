import { TodoAreaID, TodoItemID } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export namespace DeleteItemByTodoItemIDRequest {
  export type Params = {
    todoItemID: TodoItemID,
    todoAreaID: TodoAreaID
   }
  export const request = (payload: Params) => ({
    type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST
  })
}

export namespace DeleteItemByTodoItemIDSuccess {
  export type Params = {
    todoItemID: TodoItemID,
    todoAreaID: TodoAreaID
   }
  export const success = (payload: Params) => ({
    type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS,
    payload
  })
}

export namespace DeleteItemByTodoItemIDFailure {
  export type Params = { errors: string[] }
  export const failure = (payload: Params) => ({
    type: types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE,
    payload
  })
}
