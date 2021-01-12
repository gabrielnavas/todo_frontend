import * as types from '../../configs/actions-reducer-types';
import { 
  PayloadInsertOneTodo, 
  PayloadUpdateOneTodoItemByTodoAreaID, 
  PayloadRemoveItemByTodoAreaID, 
  PayloadRemoveOneItemByTodoAreaIDAndTodoItemID, 
  PayloadUpdateOneTodoItemByID 
} from './types';


export function updateOneTodoItemByID(payload: PayloadUpdateOneTodoItemByID) {
  return {
    type: types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID,
    payload
  }
}

export function updateOneTodoItemByTodoAreaID(payload: PayloadUpdateOneTodoItemByTodoAreaID) {
  return {
    type: types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_TODO_AREA_ID,
    payload
  }
}

export function removeOneItemByTodoAreaIDAndTodoItemID(payload: PayloadRemoveItemByTodoAreaID) {
  return {
    type: types.TODOS_LISTS__REMOVE_ONE_TODO_ITEM_BY_TODO_AREA_ID_AND_TODO_ITEM_ID,
    payload
  }
}

export function insertOneTodoItem(payload: PayloadInsertOneTodo) {
  return {
    type: types.TODOS_LISTS__INSERT_ONE_TODO_ITEM,
    payload
  }
}