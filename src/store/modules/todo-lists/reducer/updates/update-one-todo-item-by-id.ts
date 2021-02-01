import { TodoItemModel } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type updateTodoItemByIDParams = {
  state: StateTypeTodoLists
  newTodoItem: TodoItemModel
  oldTodoItem: TodoItemModel
}

export const updateOneTodoItemByID = (params: updateTodoItemByIDParams): StateTypeTodoLists => {
  if (params.newTodoItem.todoAreaID !== params.oldTodoItem.todoAreaID) {
    return differentTodoAreaList(params)
  }

  return equalsTodoAreaList(params.state, params.newTodoItem)
}

const differentTodoAreaList = (params: updateTodoItemByIDParams) => {
  const { oldTodoItem, state, newTodoItem } = params
  const listOldFiltred = state[oldTodoItem.todoAreaID]
    .filter(todo => todo.id !== oldTodoItem.id)
  const newState = {
    ...state,
    [params.oldTodoItem.todoAreaID]: listOldFiltred
  }
  const newListInsert = state[newTodoItem.todoAreaID]
  newListInsert.push(newTodoItem)
  const newTodoReturn = {
    ...newState,
    [params.newTodoItem.todoAreaID]: newListInsert
  }
  return newTodoReturn
}

const equalsTodoAreaList = (state: StateTypeTodoLists, newTodoItem: TodoItemModel) => {
  const newList = state[newTodoItem.todoAreaID]
    .map(todo => todo.id === newTodoItem.id ? newTodoItem : todo)
  const newState = {
    ...state,
    [newTodoItem.todoAreaID]: newList
  }
  return newState
}
