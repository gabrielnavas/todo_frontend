import { TodoData } from 'pages/todo/components/todo-item'

export const findAndRemoveByTodoItemID = (todoList: TodoData[], todoItemID: string) => {
  const index = todoList.findIndex(todo => todo.id === todoItemID)
  if (index >= 0) todoList.splice(index, 1)
}
