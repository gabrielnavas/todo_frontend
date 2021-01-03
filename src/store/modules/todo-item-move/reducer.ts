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
    case types.TODO_ITEM_MOVE__ONDRAG_START: {
      const newtodoItemMove = action.payload
      return newtodoItemMove;
    }

    case types.TODO_ITEM_MOVE__ONDRAG_END: {
      return null;
    }

    default: {
      return state;
    }
  }
}
  
export default reducer