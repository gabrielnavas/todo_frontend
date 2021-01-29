import { AnyAction } from 'redux'
import { TodoData } from '../../../../pages/todo/components/todo-item'
import * as types from '../../../configs/actions-reducer-types'

import { addNewTodoItem } from './inserts'
import {
  deleteByTodoAreaIDAndTodoItemID
} from './deletes'
import {
  updateChangeTodoItemAreaID,
  updateNotChangeTodoItemAreaID,
  updateTodoAreaID
} from './updates'
import { PayloadUpdateOneTodoItemByID, PayloadUpdateOneTodoItemByTodoAreaID } from '../actions/updates'
import { PayloadDeleteItemByTodoAreaID } from '../actions/deletes'
import { PayloadInsertOneTodo } from '../actions/inserts'

export type StateTypeTodoLists = {
  todo: TodoData[]
  doing: TodoData[]
  done: TodoData[]
}

const inititalState: StateTypeTodoLists = {
  todo: [],
  doing: [],
  done: []
}

const reducer = (state: StateTypeTodoLists = inititalState, action: AnyAction) => {
  switch (action.type) {
    case types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_TODO_AREA_ID: {
      const payload = action.payload as PayloadUpdateOneTodoItemByTodoAreaID
      const { todoAreaIDToInsert, todoItemMove } = payload
      const newState = { ...state }
      const newTodoItem = updateTodoAreaID({ todoItemMove, todoAreaIDToInsert })
      return { ...addNewTodoItem(todoAreaIDToInsert, newState, newTodoItem) }
    }

    case types.TODOS_LISTS__REMOVE_ONE_TODO_ITEM_BY_TODO_AREA_ID_AND_TODO_ITEM_ID: {
      const { todoAreaID, todoItemID } = action.payload as PayloadDeleteItemByTodoAreaID
      const newState = { ...state }
      return { ...deleteByTodoAreaIDAndTodoItemID(newState, todoAreaID, todoItemID) }
    }

    case types.TODOS_LISTS__INSERT_ONE_TODO_ITEM: {
      const payload = action.payload as PayloadInsertOneTodo
      const { todoItem } = payload
      const newState = { ...state }
      return { ...addNewTodoItem(todoItem.todoAreaID, newState, todoItem) }
    }

    case types.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID: {
      const { todoItem, oldTodoItemID } = action.payload as PayloadUpdateOneTodoItemByID
      const newState = { ...state }
      if (todoItem.todoAreaID === oldTodoItemID) {
        return updateNotChangeTodoItemAreaID(todoItem.todoAreaID, newState, todoItem)
      }
      return { ...updateChangeTodoItemAreaID(oldTodoItemID, newState, todoItem) }
    }

    default: {
      return state
    }
  }
}

export default reducer
