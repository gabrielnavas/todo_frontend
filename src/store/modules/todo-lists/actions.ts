import * as types from '../../configs/actions-reducer-types';
import { PayloadInsertOneTodo, PayloadOnDropType, PayloadRemoveItemByTodoAreaID } from './types';

export function updateOneTodoItemByTodoAreaId(payload: PayloadOnDropType) {
  return {
    type: types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_TODO_AREA_ID,
    payload
  }
}

export function removeOneItemByTodoAreaID(payload: PayloadRemoveItemByTodoAreaID) {
  return {
    type: types.TODOS_LISTS__REMOVE_ONE_TODO_ITEM_BY_TODO_AREA_ID,
    payload
  }
}


export function insertOneTodoItem(payload: PayloadInsertOneTodo) {
  return {
    type: types.TODOS_LISTS__INSERT_ONE_TODO_ITEM,
    payload
  }
}