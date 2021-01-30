import { TodoItemModel, TodoAreaID } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type DeleteONeTodoItemsByIDParams = {
  newState: StateTypeTodoLists
  todoAreaID: TodoAreaID
  todoItemID: number
}

export const deleteOneTodoItemByID = (params: DeleteONeTodoItemsByIDParams): StateTypeTodoLists => {
  const { todoItemID, todoAreaID } = params
  const newTodoList = findAndRemoveByTodoItemID({
    todoList: params.newState[todoAreaID],
    todoItemID
  })

  return {
    ...params.newState,
    [todoAreaID]: newTodoList
  }
}

type RemoveByTodoItemIDParams = {
  todoList: TodoItemModel[]
  todoItemID: number
}

const findAndRemoveByTodoItemID = (params: RemoveByTodoItemIDParams): TodoItemModel[] => {
  const index = params.todoList.findIndex(todo => todo.id === params.todoItemID)
  if (index >= 0) params.todoList.splice(index, 1)
  return [...params.todoList]
}
