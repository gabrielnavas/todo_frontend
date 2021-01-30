import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export namespace UpdateOneTodoItemByIDSuccess {
  export type Params ={
    todoItem: TodoItemModel
    oldTodoItem: TodoItemModel
  }
  export const success = (payload: Params) => ({
    type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS,
    payload
  })
}

export namespace UpdateOneTodoItemByIDRequest {
  export type Params ={
    todoItem: TodoItemModel
    oldTodoItem: TodoItemModel
  }
  export const request = (payload: Params) => ({
    type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST
  })
}

export namespace UpdateOneTodoItemByIDFailure {
  export type Params = { errors: string[] }
  export const failure = (payload: Params) => ({
    type: types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE,
    payload
  })
}
