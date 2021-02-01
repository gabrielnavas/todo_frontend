import { TodoAreaID } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type DeleteONeTodoItemsByIDParams = {
  state: StateTypeTodoLists
  todoAreaID: TodoAreaID
  todoItemID: number
}

export const deleteOneTodoItemByID = (params: DeleteONeTodoItemsByIDParams): StateTypeTodoLists => {
  const { todoItemID, todoAreaID, state } = params
  const listFilted = state[todoAreaID].filter(todoItem => todoItem.id !== todoItemID)
  const newState = {
    ...state,
    [todoAreaID]: listFilted
  }
  return newState
}
