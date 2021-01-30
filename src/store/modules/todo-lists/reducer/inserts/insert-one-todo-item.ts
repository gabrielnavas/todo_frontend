import { TodoItemModel } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type InsertOneTodoItemParams = {
  newState: StateTypeTodoLists
  newTodoItem: TodoItemModel
}

export const insertOneTodoItem = (params: InsertOneTodoItemParams): StateTypeTodoLists => {
  const { todoAreaID } = params.newTodoItem
  if (todoAreaID === 'done') params.newState.done.push(params.newTodoItem)
  else if (todoAreaID === 'doing') params.newState.doing.push(params.newTodoItem)
  else if (todoAreaID === 'todo') params.newState.todo.push(params.newTodoItem)
  return { ...params.newState }
}
