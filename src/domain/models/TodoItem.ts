export type TodoAreaID = 'todo' | 'doing' | 'done'
export type TodoItemID = number

export type TodoItemModel = {
  id?: TodoItemID
  todoAreaID: TodoAreaID
  title: string
  description: string
}
