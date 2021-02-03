import { TodoItemModel } from 'domain/models/TodoItem'
import { AnyAction } from 'redux'
import * as types from '../../configs/actions-reducer-types'

export type StateTypeTodoItemMove = TodoItemModel

export const inititalState = () => null as StateTypeTodoItemMove

const reducer = (state: StateTypeTodoItemMove = inititalState(), action: AnyAction) => {
  switch (action.type) {
    case types.todoItemMove.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM: {
      const newtodoItemMove = action.payload as StateTypeTodoItemMove
      return newtodoItemMove
    }

    case types.todoItemMove.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM: {
      return null
    }

    default: {
      return state
    }
  }
}

export default reducer
