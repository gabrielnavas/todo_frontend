import { StateType } from ".."
import { TodoData } from "../../../../../components/todo-item"
import { TodoAreaID } from "../../../../../components/todo-list"

export const addNewTodoItem = (todoAreaID: TodoAreaID, newState: StateType, newTodoItem: TodoData) => {
  if(todoAreaID === 'done') newState.done.push(newTodoItem)
  else if(todoAreaID === 'doing') newState.doing.push(newTodoItem)
  else if(todoAreaID === 'todo') newState.todo.push(newTodoItem)
  return newState
}