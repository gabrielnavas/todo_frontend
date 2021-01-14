import { TodoData } from "../../../../../pages/todo/components/todo-item"
import { PayloadUpdateOneTodoItemByTodoAreaID } from "../../types"

export const updateTodoAreaID = ({todoItemMove, todoAreaIDToInsert}: PayloadUpdateOneTodoItemByTodoAreaID) => {
  return { ...todoItemMove, todoAreaID: todoAreaIDToInsert } as TodoData
}