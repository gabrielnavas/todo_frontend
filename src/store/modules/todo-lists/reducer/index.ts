import { AnyAction } from 'redux'

import * as types from '../../../configs/actions-reducer-types'
import * as actionsInsertOneTodoItem from '../actions/inserts/insert-one-todo-item'
import * as actionsUpdateOneTodoItemById from '../actions/updates/update-one-todo-item-by-id'
import * as actionsDeleteOneTodoItemById from '../actions/deletes/delete-one-todo-item-by-id'
import * as actionsFindAllByToken from '../actions/finds/find-all'

import { deleteOneTodoItemByID } from './deletes/delete-one-todo-item-by-id'
import { insertOneTodoItem } from './inserts/insert-one-todo-item'
import { inititalState, StateTypeTodoLists } from './state-initital'
import { updateOneTodoItemByID } from './updates/update-one-todo-item-by-id'

const reducer = (state: StateTypeTodoLists = inititalState(), action: AnyAction): StateTypeTodoLists => {
  switch (action.type) {
    case types.todoLists.deletes.TODOS_LISTS__CLEAR_ALL__REQUEST: {
      return inititalState()
    }

    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }
    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS: {
      const payload = action.payload as actionsInsertOneTodoItem.ParamsSuccess
      return insertOneTodoItem({
        newState: { ...state },
        newTodoItem: payload.todoItem
      })
    }

    case types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE: {
      const payload = action.payload as actionsInsertOneTodoItem.ParamsFailure
      const { errors } = payload
      const newState = {
        ...inititalState(),
        errors
      }
      return newState
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS: {
      const { todoItem, oldTodoItem } = action.payload as actionsUpdateOneTodoItemById.ParamsSuccess
      return updateOneTodoItemByID({
        state: { ...state },
        oldTodoItem: oldTodoItem,
        newTodoItem: todoItem
      })
    }

    case types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE: {
      const payload = action.payload as actionsUpdateOneTodoItemById.ParamsFailure
      const { errors } = payload
      return { ...inititalState(), errors }
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS: {
      const { todoItemID, todoAreaID } = action.payload as actionsDeleteOneTodoItemById.ParamsSuccess
      return deleteOneTodoItemByID({
        state: { ...state },
        todoAreaID,
        todoItemID
      })
    }

    case types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE: {
      const payload = action.payload as actionsDeleteOneTodoItemById.ParamsFailure
      const { errors } = payload
      const newState = {
        ...inititalState(),
        errors: errors
      }
      return newState
    }

    case types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST: {
      const newState = { ...state, isLoading: true }
      return newState
    }

    case types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS: {
      const { todoItemsLists } = action.payload as actionsFindAllByToken.ParamsSuccess
      const newState = todoItemsLists.reduce((newStateParams, list) => {
        if (list.length > 0) {
          const todoAreaID = list[0].todoAreaID
          newStateParams[todoAreaID].push(...list)
        }
        return newStateParams
      }, { ...state })
      return newState
    }

    case types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE: {
      const payload = action.payload as actionsFindAllByToken.ParamsFailure
      const { errors } = payload
      const newState = {
        ...inititalState(),
        errors: errors
      }
      return newState
    }

    default: {
      return state
    }
  }
}

export default reducer
