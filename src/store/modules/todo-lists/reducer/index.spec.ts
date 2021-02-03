import reducer from '.'
import {
  inititalState as inititalStateReducer,
  StateTypeTodoLists
} from './state-initital'
import * as actionsTypes from '../../../configs/actions-reducer-types'
import * as actionsInsertOneTodoItem from '../actions/inserts/insert-one-todo-item'
import { TodoAreaID } from 'domain/models/TodoItem'
import { insertOneTodoItem } from './inserts/insert-one-todo-item'
import { updateOneTodoItemByID } from './updates/update-one-todo-item-by-id'
import { deleteOneTodoItemByID } from './deletes/delete-one-todo-item-by-id'

describe('todo-list/reducer', () => {
  let inititalState: StateTypeTodoLists

  beforeEach(() => {
    inititalState = inititalStateReducer()
  })

  test('should call reducer with type TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST and returns correct new state', () => {
    const type = actionsTypes.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual({
      ...inititalState,
      isLoading: true
    })
  })

  test('should call reducer with type TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS and returns correct new state', () => {
    const todoItem = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
      todoAreaID: 'todo' as TodoAreaID
    }
    const type = actionsTypes.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__SUCCESS
    const payload = {
      todoItem
    } as actionsInsertOneTodoItem.ParamsSuccess
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual(insertOneTodoItem({
      newState: { ...inititalState },
      newTodoItem: todoItem
    }))
  })

  test('should call reducer with type TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE and returns correct new state', () => {
    const type = actionsTypes.todoLists.inserts.TODOS_LISTS__INSERT_ONE_TODO_ITEM__FAILURE
    const payload = {
      errors: ['any_error1', 'any_error2']
    } as actionsInsertOneTodoItem.ParamsFailure
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual({
      ...inititalState,
      errors: payload.errors,
      isLoading: false
    })
  })

  test('should call reducer with type TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST and returns correct new state', () => {
    const type = actionsTypes.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__REQUEST
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual({
      ...inititalState,
      isLoading: true
    })
  })

  test('should call reducer with type TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS and returns correct new state', () => {
    const oldTodoItem = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
      todoAreaID: 'todo' as TodoAreaID
    }
    const newTodoItem = {
      id: 1,
      title: 'any_title_updated',
      description: 'any_description_update',
      todoAreaID: 'done' as TodoAreaID
    }
    const type = actionsTypes.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__SUCCESS
    const payload = {
      todoItem: newTodoItem,
      oldTodoItem
    }
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual(updateOneTodoItemByID({
      state: { ...inititalState },
      oldTodoItem,
      newTodoItem
    }))
  })

  test('should call reducer with type TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE and returns correct new state', () => {
    const type = actionsTypes.todoLists.updates.TODOS_LISTS__UPDATE_TODO_ITEM_BY_ID__FAILURE
    const payload = {
      errors: ['any_error1', 'any_error2']
    }
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual({
      ...inititalState,
      errors: payload.errors,
      isLoading: false
    })
  })

  test('should call reducer with type TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST and returns correct new state', () => {
    const type = actionsTypes.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__REQUEST
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual({
      ...inititalState,
      isLoading: true
    })
  })

  test('should call reducer with type TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS and returns correct new state', () => {
    const payload = {
      todoAreaID: 'todo' as TodoAreaID,
      todoItemID: 1
    }
    const type = actionsTypes.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__SUCCESS
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual(deleteOneTodoItemByID({
      state: { ...inititalState },
      todoAreaID: payload.todoAreaID,
      todoItemID: payload.todoItemID
    }))
  })

  test('should call reducer with type TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE and returns correct new state', () => {
    const payload = {
      errors: ['any_error1', 'any_error2']
    }
    const type = actionsTypes.todoLists.deletes.TODOS_LISTS__DELETE_ONE_TODO_ITEM_BY_TODO_ITEM_ID__FAILURE
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual({
      ...inititalState,
      errors: ['any_error1', 'any_error2']
    })
  })

  test('should call reducer with type TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST and returns correct new state', () => {
    const type = actionsTypes.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__REQUEST
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual({
      ...inititalState,
      isLoading: true
    })
  })

  test('should call reducer with type TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS and returns correct new state', () => {
    const type = actionsTypes.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__SUCCESS
    const payload = {
      todoItemsLists: [
        [
          { id: 1, description: 'any_description1_of_todo', title: 'any_title', todoAreaID: 'todo' },
          { id: 2, description: 'any_description2_of_todo', title: 'any_title', todoAreaID: 'todo' }
        ], [
          { id: 1, description: 'any_description1_of_doing', title: 'any_title', todoAreaID: 'doing' },
          { id: 2, description: 'any_description2_of_doing', title: 'any_title', todoAreaID: 'doing' },
          { id: 3, description: 'any_description3_of_doing', title: 'any_title', todoAreaID: 'doing' }
        ], [
          { id: 1, description: 'any_description1_of_done', title: 'any_title', todoAreaID: 'done' }
        ]
      ]
    }
    const newState = reducer(inititalState, { type, payload })
    expect(newState.todo).toEqual(payload.todoItemsLists[0])
    expect(newState.doing).toEqual(payload.todoItemsLists[1])
    expect(newState.done).toEqual(payload.todoItemsLists[2])
    expect(newState.errors).toEqual([])
    expect(newState.isLoading).toEqual(false)
  })

  test('should call reducer with type TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE and returns correct new state', () => {
    const type = actionsTypes.todoLists.finds.TODO_LIST__FIND_ALL_TODO_ITEMS__FAILURE
    const payload = {
      errors: ['any_error1', 'any_error2']
    }
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual({
      ...inititalState,
      errors: payload.errors
    })
  })

  test('should call reducer without type and returns a some state', () => {
    const type = 'any_other_type_action'
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual(inititalState)
  })
})
