import reducer, {
  StateTypeTodoItemMove,
  inititalState as inititalStateValue
} from './reducer'
import * as types from '../../configs/actions-reducer-types'
import { TodoAreaID } from 'domain/models/TodoItem'

describe('todo-list/reducer', () => {
  let inititalState: StateTypeTodoItemMove

  beforeEach(() => {
    inititalState = inititalStateValue()
  })

  test('should call reducer with type TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST and returns correct new state', () => {
    const type = types.todoItemMove.TODO_ITEM_MOVE__SET_NEW_TODO_ITEM
    const payload = {
      id: 1,
      title: 'any_title',
      description: 'any_description',
      todoAreaID: 'todo' as TodoAreaID
    } as StateTypeTodoItemMove
    const newState = reducer(inititalState, { type, payload })
    expect(newState).toEqual(payload)
  })

  test('should call reducer with type TODOS_LISTS__INSERT_ONE_TODO_ITEM__REQUEST and returns correct new state', () => {
    const type = types.todoItemMove.TODO_ITEM_MOVE__SET_NULL_TODO_ITEM
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual(inititalState)
  })

  test('should call reducer without type and returns a some state', () => {
    const type = 'any_other_type_action'
    const newState = reducer(inititalState, { type })
    expect(newState).toEqual(inititalState)
  })
})
