type Errors = string[]
type InsertNewTodoItemValidatitonParams = {
  title: string
  description: string
}

export const insertNewTodoItemValidatiton = ({ title, description }: InsertNewTodoItemValidatitonParams): Errors => {
  const errors = [] as string[]
  if (!title.trim()) errors.push('Título não pode ser vazio!')
  if (title.trim().length < 3) errors.push('Título está muito pequeno!')
  if (title.trim().length > 30) errors.push('Título está muito grande!')
  if (!description.trim()) errors.push('Descrição não pode ser vazia!')
  if (description.trim().length > 255) errors.push('Descrição está muito grande!')
  return errors
}
