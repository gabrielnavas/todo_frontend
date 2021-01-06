import { TodoData } from "../../../components/todo-item";
import { TodoAreaID } from "../../../components/todo-list";

export type PayloadOnDropType = {
  todoAreaIDToInsert: TodoAreaID
  todoItemMove: TodoData
}

export type PayloadRemoveItemByTodoAreaID = {
  todoAreaID: TodoAreaID
  todoItemID: string
}

export type PayloadInsertOneTodo = {
  todoItem: TodoData
}