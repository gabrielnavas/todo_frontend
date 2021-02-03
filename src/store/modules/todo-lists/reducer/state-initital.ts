import { TodoItemModel } from 'domain/models/TodoItem'

export type StateTypeTodoLists = {
  todo: TodoItemModel[]
  doing: TodoItemModel[]
  done: TodoItemModel[]
  isLoading: boolean
  errors: string[]
}

export const inititalState = () => ({
  todo: [],
  doing: [],
  done: [],
  isLoading: false,
  errors: []
}) as StateTypeTodoLists
