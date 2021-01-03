import { TodoData } from "../../../components/todo-item";
import { TodoAreaID } from "../../../components/todo-list";

export type PayloadOnDropType = {
  todoAreaID:TodoAreaID
  todoItemMove:TodoData
}
