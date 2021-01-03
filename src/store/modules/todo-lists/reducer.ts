import {v4 as uuid} from 'uuid'

import { TodoData } from '../../../components/todo-item';
import * as types from '../../configs/actions-reducer-types';
import { PayloadOnDropType } from './types-datas';

type ActionType = {
  type: string, 
  payload?: any
}

export type StateType = {
  todo: TodoData[]
  doing: TodoData[]
  done: TodoData[]
}


const makeTemp = (): TodoData[] => [
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: 'fazer coco ate morrer todos os dias'
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
  { 
    id: uuid(), 
    title: 'fazer coco', 
    description: `fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias
    fazer coco ate morrer todos os dias`
  },
]

const inititalState: StateType = {
  todo: makeTemp(),
  doing: makeTemp().reverse(),
  done: makeTemp()
}

const reducer = (state: StateType = inititalState, action: ActionType) => {

  switch (action.type) {
    case types.TODOS_LISTS__ONDROP: {
      const {todoAreaID, todoItemMove} = action.payload as PayloadOnDropType
      const newState = { ...state }
      if(todoAreaID === 'done') newState.done.push(todoItemMove)
      if(todoAreaID === 'doing') newState.doing.push(todoItemMove)
      if(todoAreaID === 'todo') newState.todo.push(todoItemMove)
      console.log(newState)
      return newState;
    }

    default: {
      return state;
    }
  }
}
  
export default reducer

