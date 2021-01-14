import { TodoData } from '../../../pages/todo/components/todo-item';
import * as types from '../../configs/actions-reducer-types';

export function setNewTodoItem(payload: TodoData) {
  return {
    type: types.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM,
    payload
  }
}

export function setNullTodoItem() {
  return {
    type: types.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM,
  }
}