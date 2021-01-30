import { AnyAction } from 'redux'

import * as types from '../../../configs/actions-reducer-types'
import {
  DeleteItemByTodoItemIDFailure,
  DeleteItemByTodoItemIDSuccess
} from '../actions/deletes/delete-item-by-todo-item-id'
import {
  InsertOneTodoItemFailure,
  InsertOneTodoItemSuccess
} from '../actions/inserts/insert-one-todo'
import {
  UpdateOneTodoItemByIDFailure,
  UpdateOneTodoItemByIDSuccess
} from '../actions/updates/update-one-todo-item-by-id'
import { deleteOneTodoItemByID } from './deletes/delete-one-todo-item-by-id'
import { insertOneTodoItem } from './inserts/insert-one-todo-item'
import { inititalState, StateTypeTodoLists } from './state-initital'
import { updateTodoItemByID } from './updates/update-todo-item-by-id'

const reducer = (state: StateTypeTodoLists = inititalState, action: AnyAction) => {
  switch (action.type) {
    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS: {
      const payload = action.payload as InsertOneTodoItemSuccess.Params
      return insertOneTodoItem({
        newState: { ...state },
        newTodoItem: payload.todoItem
      })
    }

    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE: {
      const payload = action.payload as InsertOneTodoItemFailure.Params
      const { errors } = payload
      const newState = { ...inititalState, ...errors }
      return newState
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS: {
      const { todoItem, oldTodoItem } = action.payload as UpdateOneTodoItemByIDSuccess.Params
      return updateTodoItemByID({
        newState: { ...state },
        oldTodoItem: oldTodoItem,
        todoItem: todoItem
      })
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE: {
      const payload = action.payload as UpdateOneTodoItemByIDFailure.Params
      const { errors } = payload
      const newState = { ...inititalState, ...errors }
      return newState
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS: {
      const { todoItemID, todoAreaID } = action.payload as DeleteItemByTodoItemIDSuccess.Params
      return deleteOneTodoItemByID({
        newState: { ...state },
        todoAreaID,
        todoItemID
      })
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE: {
      const payload = action.payload as DeleteItemByTodoItemIDFailure.Params
      const { errors } = payload
      const newState = { ...inititalState, ...errors }
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
