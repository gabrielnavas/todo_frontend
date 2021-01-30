import { TodoItemModel } from 'domain/models/TodoItem'

export type StateTypeTodoLists = {
  todo: TodoItemModel[]
  doing: TodoItemModel[]
  done: TodoItemModel[]
  isLoading: boolean
  errors: string[]
}

export const inititalState: StateTypeTodoLists = {
  todo: [],
  doing: [],
  done: [],
  isLoading: false,
  errors: []
}
