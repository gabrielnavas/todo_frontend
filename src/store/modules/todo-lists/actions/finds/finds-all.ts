import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export namespace FindAllTodoItemsRequest {
  export const request = () => ({
    type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST
  })
}

export namespace FindAllTodoItemsSuccess {
  export type Params = {
    todoItemsLists: {
      todo: TodoItemModel[]
      doing: TodoItemModel[]
      done: TodoItemModel[]
    }
  }
  export const success = (payload: Params) => ({
    type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS,
    payload
  })
}

export namespace FindAllTodoItemsFailure {
  export type Params = { errors: string[] }
  export const failure = (payload: Params) => ({
    type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE,
    payload
  })
}
