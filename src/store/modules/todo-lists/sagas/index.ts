import { takeLatest, all } from 'redux-saga/effects'
import * as types from '../../../configs/actions-reducer-types'

import { deleteOneTodoItemByIdRequestSaga } from './deletes/delete-one-todo-item-by-id-request'
import { findAllTodoItemByUserIdRequestSaga } from './finds/find-all-todo-items-by-user-id-request'
import { insertOneTodoItemRequestSaga } from './inserts/insert-one-todo-item-request'
import { updateOneTodoItemByIDRequestSaga } from './updates/update-todo-item-by-id-request'

export const sagas = all([
  takeLatest(
    types.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST,
    insertOneTodoItemRequestSaga
  ),
  takeLatest(
    types.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST,
    updateOneTodoItemByIDRequestSaga
  ),
  takeLatest(
    types.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST,
    deleteOneTodoItemByIdRequestSaga
  ),
  takeLatest(
    types.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST,
    findAllTodoItemByUserIdRequestSaga
  )
])
