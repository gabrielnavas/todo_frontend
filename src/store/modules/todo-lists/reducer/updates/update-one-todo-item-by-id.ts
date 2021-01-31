import { TodoItemModel } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type updateTodoItemByIDParams = {
  state: StateTypeTodoLists
  newTodoItem: TodoItemModel
  oldTodoItem: TodoItemModel
}

export const updateOneTodoItemByID = (params: updateTodoItemByIDParams): StateTypeTodoLists => {
  const { oldTodoItem, state, newTodoItem } = params
  let newState = state

  if (newTodoItem.todoAreaID !== oldTodoItem.todoAreaID) {
    const listOldFiltred = state[oldTodoItem.todoAreaID]
      .filter(todo => todo.id !== oldTodoItem.id)
    newState = {
      ...state,
      [params.oldTodoItem.todoAreaID]: listOldFiltred
    }
  }
  const newListInsert = state[newTodoItem.todoAreaID]
  newListInsert.push(newTodoItem)
  const newTodoReturn = {
    ...newState,
    [params.newTodoItem.todoAreaID]: newListInsert
  }
  return newTodoReturn
}
