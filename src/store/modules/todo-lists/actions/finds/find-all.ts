import { TodoItemModel } from 'domain/models/TodoItem'
import * as types from '../../../../configs/actions-reducer-types'

export const request = () => ({
  type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST
})

export type ParamsSuccess = {
  todoItemsLists: {
    todo: TodoItemModel[]
    doing: TodoItemModel[]
    done: TodoItemModel[]
  }
}
export const success = (payload: ParamsSuccess) => ({
  type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS,
  payload
})

export type ParamsFailure = { errors: string[] }
export const failure = (payload: ParamsFailure) => ({
  type: types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE,
  payload
})
