import { TodoAreaID, TodoItemID } from 'domain/models/TodoItem'

type Params = {
  todoAreaID: TodoAreaID,
  todoItemID: TodoItemID
}
type Result = string[]

export const deleteOneTodoItemValidatiton = ({ todoAreaID, todoItemID }: Params): Result => {
  const errors = [] as string[]
  if (todoAreaID.length === 0) errors.push('Nome da área de todo muito pequeno!')
  if (todoItemID <= 0) errors.push('ID do todo item não pode ser negativo ou zero.!')
  return errors
}
