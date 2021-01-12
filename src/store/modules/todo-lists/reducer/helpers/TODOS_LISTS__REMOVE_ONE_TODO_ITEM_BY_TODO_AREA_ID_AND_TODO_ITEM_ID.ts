import { StateType } from ".."
import { TodoData } from "../../../../../components/todo-item"
import { TodoAreaID } from "../../../../../components/todo-list"


export const findAndRemoveByTodoItemID = (todoList: TodoData[], todoItemID: string) => {
  const index = todoList.findIndex(todo => todo.id === todoItemID)
  if(index >= 0) todoList.splice(index, 1)
}

export const removeByTodoAreaIDAndTodoItemID = (newState: StateType, todoAreaID: TodoAreaID, todoItemID: string) => {
  if(todoAreaID === 'todo') findAndRemoveByTodoItemID(newState.todo, todoItemID)
  else if(todoAreaID === 'doing') findAndRemoveByTodoItemID(newState.doing, todoItemID) 
  else if(todoAreaID === 'done') findAndRemoveByTodoItemID(newState.done, todoItemID)
  return newState
}