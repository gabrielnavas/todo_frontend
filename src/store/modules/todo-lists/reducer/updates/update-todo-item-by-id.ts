import { TodoItemModel } from 'domain/models/TodoItem'
import { StateTypeTodoLists } from '../state-initital'

type updateTodoItemByIDParams = {
  newState: StateTypeTodoLists
  todoItem: TodoItemModel
  oldTodoItem: TodoItemModel
}

export const updateTodoItemByID = (params: updateTodoItemByIDParams): StateTypeTodoLists => {
  if (params.todoItem.todoAreaID !== params.oldTodoItem.todoAreaID) {
    removeTodoItemTodoList({
      oldTodoItem: params.oldTodoItem,
      state: params.newState
    })
  }
  const newState = updateTodoItemTodoList({
    todoItemUpdate: params.todoItem,
    state: params.newState
  })
  return newState
}

type updateTodoItemTodoListParams = {
  todoItemUpdate: TodoItemModel,
  state: StateTypeTodoLists
}

const updateTodoItemTodoList = (params: updateTodoItemTodoListParams): StateTypeTodoLists => {
  const { todoAreaID } = params.todoItemUpdate
  const newTodoList = params.state[todoAreaID].map((todo: TodoItemModel) => {
    if (todo.id === params.todoItemUpdate.id) return params.todoItemUpdate
    return todo
  })
  return {
    ...params.state,
    [todoAreaID]: newTodoList
  }
}

type searchAndRemoveTodoItemByIDParams = {
  todoItemID: number
  todoList: TodoItemModel[]
}

const searchAndRemoveTodoItemByID = (params: searchAndRemoveTodoItemByIDParams): TodoItemModel[] => {
  const howManyItems = 1
  const index = params.todoList.findIndex(todo => todo.id === params.todoItemID)
  params.todoList.splice(index, howManyItems)
  return params.todoList
}

type removeTodoItemInOtherTodoListParams = {
  oldTodoItem: TodoItemModel
  state: StateTypeTodoLists
}

const removeTodoItemTodoList = (params: removeTodoItemInOtherTodoListParams) => {
  const { todoAreaID, id } = params.oldTodoItem
  const todoListModified = searchAndRemoveTodoItemByID({
    todoItemID: id, todoList: params.state[todoAreaID]
  })
  const newStateTodoLists = {
    ...params.state,
    [todoAreaID]: [...todoListModified]
  } as StateTypeTodoLists
  return newStateTodoLists
}
