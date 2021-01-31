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

// type updateTodoItemTodoListParams = {
//   todoItemUpdate: TodoItemModel,
//   state: StateTypeTodoLists
// }

// const updateTodoItemTodoList = (params: updateTodoItemTodoListParams): StateTypeTodoLists => {
//   const { todoAreaID } = params.todoItemUpdate
//   const newTodoList = params.state[todoAreaID].map((todo: TodoItemModel) => {
//     if (todo.id === params.todoItemUpdate.id) return params.todoItemUpdate
//     return todo
//   })
//   return {
//     ...params.state,
//     [todoAreaID]: newTodoList
//   }
// }

// type searchAndRemoveTodoItemByIDParams = {
//   todoItemID: number
//   todoList: TodoItemModel[]
// }

// const searchAndRemoveTodoItemByID = (params: searchAndRemoveTodoItemByIDParams): TodoItemModel[] => {
//   const index = params.todoList.findIndex(todo => todo.id === params.todoItemID)
//   const howManyItems = 1
//   params.todoList.splice(index, howManyItems)
//   return params.todoList
// }

// type removeTodoItemInOtherTodoListParams = {
//   oldTodoItem: TodoItemModel
//   state: StateTypeTodoLists
// }

// const removeTodoItemTodoList = (params: removeTodoItemInOtherTodoListParams) => {
//   const { todoAreaID, id } = params.oldTodoItem
//   const todoListModified = searchAndRemoveTodoItemByID({
//     todoItemID: id, todoList: params.state[todoAreaID]
//   })
//   console.log(todoListModified)
//   const newStateTodoLists = {
//     ...params.state,
//     [todoAreaID]: [...todoListModified]
//   } as StateTypeTodoLists
//   return newStateTodoLists
// }
