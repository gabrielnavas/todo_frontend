import { TodoItemModel } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type InsertOneTodoItemParams = {
  newState: StateTypeTodoLists
  newTodoItem: TodoItemModel
}

export const insertOneTodoItem = (params: InsertOneTodoItemParams): StateTypeTodoLists => {
  const { todoAreaID } = params.newTodoItem
  params.newState[todoAreaID].push(params.newTodoItem)
  return { ...params.newState }
}
