import { TodoAreaID } from 'pages/todo/components/todo-list'
import * as types from '../../../../configs/actions-reducer-types'

export type PayloadDeleteItemByTodoAreaID = {
  todoAreaID: TodoAreaID
  todoItemID: string
}

export type PayloadRemoveOneItemByTodoAreaIDAndTodoItemID = {
  todoItemID: string
  todoAreaID: TodoAreaID
}

export function deleteOneItemByTodoAreaIDAndTodoItemID (payload: PayloadDeleteItemByTodoAreaID) {
  return {
    type: types.todoLists.TODOS_LISTS__REMOVE_ONE_TODO_ITEM_BY_TODO_AREA_ID_AND_TODO_ITEM_ID,
    payload
  }
}
