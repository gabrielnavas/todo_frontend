import { TodoData } from '../../../pages/todo/components/todo-item';
import * as types from '../../configs/actions-reducer-types';

type ActionType = {
  type: string, 
  payload?: any
}

export type StateTypeTodoItemMove = TodoData

const inititalState: StateTypeTodoItemMove = null

const reducer = (state: StateTypeTodoItemMove = inititalState, action: ActionType) => {
  switch (action.type) {
    case types.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM: {
      const newtodoItemMove = action.payload as StateTypeTodoItemMove
      return newtodoItemMove
    }

    case types.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM: {
      return null;
    }

    default: {
      return state;
    }
  }
}
  
export default reducer