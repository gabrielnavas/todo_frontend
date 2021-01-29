import { TodoData } from 'pages/todo/components/todo-item'

export type StateTypeTodoLists = {
  todo: TodoData[]
  doing: TodoData[]
  done: TodoData[]
}

export const inititalState: StateTypeTodoLists = {
  todo: [],
  doing: [],
  done: []
}
