import { combineReducers } from 'redux'

import todoItemMoveReducer, { StateTypeTodoItemMove } from '../modules/todo-item-move/reducer'
import todoListsReducer from '../modules/todo-lists/reducer'
import { StateTypeTodoLists } from '../modules/todo-lists/reducer/state-initital'
import authReducer, { StateType as StateTypeAuth } from '../modules/auth/reducer'

export type ReducersType = {
  todoItemMove: StateTypeTodoItemMove
  todoLists: StateTypeTodoLists
  auth: StateTypeAuth
}
export const rootReducer = combineReducers<ReducersType>({
  todoItemMove: todoItemMoveReducer,
  todoLists: todoListsReducer,
  auth: authReducer
})
