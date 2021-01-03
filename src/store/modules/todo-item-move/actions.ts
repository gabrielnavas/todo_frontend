import { TodoData } from '../../../components/todo-item';
import * as types from '../../configs/actions-reducer-types';

export function todoOnDragStart(payload: TodoData) {
  return {
    type: types.TODO_ITEM_MOVE__ONDRAG_START,
    payload
  }
}

export function todoOnDragEnd() {
  return {
    type: types.TODO_ITEM_MOVE__ONDRAG_END,
  }
}