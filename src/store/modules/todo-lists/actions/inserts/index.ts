import { TodoData } from 'pages/todo/components/todo-item'
import * as types from '../../../../configs/actions-reducer-types'

export type PayloadInsertOneTodo = {
  todoItem: TodoData
}

export function insertOneTodoItem (payload: PayloadInsertOneTodo) {
  return {
    type: types.todoLists.TODOS_LISTS__INSERT_ONE_TODO_ITEM,
    payload
  }
}
