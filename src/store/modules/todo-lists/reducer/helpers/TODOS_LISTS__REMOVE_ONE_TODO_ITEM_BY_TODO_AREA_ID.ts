import { StateType } from ".."
import { TodoData } from "../../../../../components/todo-item"
import { TodoAreaID } from "../../../../../components/todo-list"

export const findAndRemove = (todoList: TodoData[], todoItemID: string) => {
  const index = todoList.findIndex(todo => todo.id === todoItemID)
  if(index >= 0) todoList.splice(index, 1)
}
export const removeByTodoAreaID = (newState: StateType, todoAreaID: TodoAreaID, todoItemID: string) => {
  if(todoAreaID === 'todo') findAndRemove(newState.todo, todoItemID)
  else if(todoAreaID === 'doing') findAndRemove(newState.doing, todoItemID) 
  else if(todoAreaID === 'done') findAndRemove(newState.done, todoItemID)
  return newState
}