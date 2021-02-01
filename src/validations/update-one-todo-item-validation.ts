import { TodoItemModel } from 'domain/models/TodoItem'
import { insertOneTodoItemValidatiton } from './insert-one-todo-item-validation'

type Params = TodoItemModel
type Result = string[]

export const updateOneTodoItemValidatiton = (params: Params): Result => {
  const { id, ...rest } = params
  const errors = insertOneTodoItemValidatiton(rest)
  if (id <= 0) errors.push('ID do todo item não pode ser negativo ou zero')
  return errors
}
