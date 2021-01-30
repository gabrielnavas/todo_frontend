import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export namespace InsertOneTodoItemRequest {
  export type Params = { todoItem: Omit<TodoItemModel, 'id'>}
  export const request = (payload: Params) => ({
    type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST,
    payload
  })
}

export namespace InsertOneTodoItemSuccess {
  export type Params = { todoItem: TodoItemModel}
  export const success = (payload: Params) => ({
    type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS,
    payload
  })
}

export namespace InsertOneTodoItemFailure {
  export type Params = { errors: string[] }
  export const failure = (payload: Params) => ({
    type: types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE,
    payload
  })
}
