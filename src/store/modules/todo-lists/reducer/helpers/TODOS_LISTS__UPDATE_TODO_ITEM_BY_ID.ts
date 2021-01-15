import { StateTypeTodoLists } from ".."
import { TodoData } from "../../../../../pages/todo/components/todo-item"
import { TodoAreaID } from "../../../../../pages/todo/components/todo-list"
import { addNewTodoItem } from "./TODOS_LISTS__INSERT_ONE_TODO_ITEM"

export const updateNotChangeTodoItemAreaID = (todoAreaID: TodoAreaID, newState: StateTypeTodoLists, newTodoItem: TodoData): StateTypeTodoLists => {
  const updateTodoItemWithClone = (oldTodo: TodoData) => 
    oldTodo.id === newTodoItem.id ? {...newTodoItem} : oldTodo
  
  if(todoAreaID === 'done') newState.done = newState.done.map(updateTodoItemWithClone)
  else if(todoAreaID === 'doing') newState.doing = newState.doing.map(updateTodoItemWithClone)
  else if(todoAreaID === 'todo') newState.todo = newState.todo.map(updateTodoItemWithClone)
  return newState
}

export const updateChangeTodoItemAreaID = (oldTodoAreaID: TodoAreaID, newState: StateTypeTodoLists, todoItem: TodoData): StateTypeTodoLists => {
  const searchAndRemoveByID = (todoItemID: string, todoList: TodoData[]): void => {
    const index = todoList.findIndex(todo => todo.id === todoItemID)
    todoList.splice(index, 1)
  }
  const removeByTodoAreaID = (todoAreaID: TodoAreaID, newState: StateTypeTodoLists, todoItemID: string): StateTypeTodoLists => {
    if(todoAreaID === 'done') searchAndRemoveByID(todoItemID, newState.done)
    else if(todoAreaID === 'doing') searchAndRemoveByID(todoItemID, newState.doing)
    else if(todoAreaID === 'todo') searchAndRemoveByID(todoItemID, newState.todo)
    return {...newState}
  }
  newState = removeByTodoAreaID(oldTodoAreaID, newState,todoItem.id)
  return addNewTodoItem(todoItem.todoAreaID, newState, todoItem)
}
