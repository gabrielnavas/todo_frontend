import { TodoData } from "../../../pages/todo/components/todo-item";
import { TodoAreaID } from "../../../pages/todo/components/todo-list";

export type PayloadUpdateOneTodoItemByTodoAreaID = {
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

export type PayloadUpdateOneTodoItemByID = {
  todoItem: TodoData
  oldTodoItemID: TodoAreaID
}

export type PayloadRemoveOneItemByTodoAreaIDAndTodoItemID = {
  todoItemID: string
  todoAreaID: TodoAreaID
}
