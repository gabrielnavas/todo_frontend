import { TodoData } from "../../../../../components/todo-item"
import { PayloadOnDropType } from "../../types"

export const updateTodoAreaID = ({todoItemMove, todoAreaIDToInsert}: PayloadOnDropType) => {
  return { ...todoItemMove, todoAreaID: todoAreaIDToInsert } as TodoData
}