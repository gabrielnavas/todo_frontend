import { StateTypeTodoLists } from '..'
import { TodoAreaID } from '../../../../../pages/todo/components/todo-list'
import { findAndRemoveByTodoItemID } from '../finds'

export const deleteByTodoAreaIDAndTodoItemID =
  (newState: StateTypeTodoLists, todoAreaID: TodoAreaID, todoItemID: string) => {
    if (todoAreaID === 'todo') findAndRemoveByTodoItemID(newState.todo, todoItemID)
    else if (todoAreaID === 'doing') findAndRemoveByTodoItemID(newState.doing, todoItemID)
    else if (todoAreaID === 'done') findAndRemoveByTodoItemID(newState.done, todoItemID)
    return newState
  }
