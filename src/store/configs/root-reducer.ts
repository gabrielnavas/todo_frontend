import { combineReducers } from 'redux';

import todoItemMoveReducer, {StateType as TodoItemMoveType} from '../modules/todo-item-move/reducer'
import todoListsReducer, {StateType as TodosListsReducerType} from '../modules/todo-lists/reducer'

export type ReducersType = {
  todoItemMove: TodoItemMoveType
  todoLists: TodosListsReducerType
}
export default combineReducers<ReducersType>({
  todoItemMove: todoItemMoveReducer,
  todoLists: todoListsReducer,
});