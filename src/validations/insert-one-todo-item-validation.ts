import { TodoItemModel } from 'domain/models/TodoItem'

type Params = Omit<TodoItemModel, 'id'>
type Result = string[]

export const insertOneTodoItemValidatiton = ({ title, description, todoAreaID }: Params): Result => {
  const errors = [] as string[]
  if (!title.trim()) errors.push('Título não pode ser vazio!')
  if (title.trim().length < 3) errors.push('Título está muito pequeno!')
  if (title.trim().length > 30) errors.push('Título está muito grande!')
  if (!description.trim()) errors.push('Descrição não pode ser vazia!')
  if (description.trim().length > 255) errors.push('Descrição está muito grande!')
  if (todoAreaID.length === 0) errors.push('Nome da área de todo muito pequeno!')
  return errors
}
