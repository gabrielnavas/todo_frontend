import { TodoData } from '../../../components/todo-item';
import * as types from '../../configs/actions-reducer-types';

type ActionType = {
  type: string, 
  payload?: any
}

export type StateType = TodoData

const inititalState: StateType = null

const reducer = (state: StateType = inititalState, action: ActionType) => {
  switch (action.type) {
    case types.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM: {
      const newtodoItemMove = action.payload as StateType
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