import { StateTypeTodoLists } from '../state-initital'
import {
  deleteOneTodoItemByID,
  DeleteONeTodoItemsByIDParams
} from './delete-one-todo-item-by-id'

describe('reducer/deletes/delete-one-todo-item-by-id', () => {
  test('should call deleteOneTodoItemById and return a new State with todo removed', () => {
    const params = {
      state: {
        doing: [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
          { id: 2, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
          { id: 3, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
        ],
        done: [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
        ],
        todo: [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' }
        ],
        errors: ['any_error1', 'any_error2'],
        isLoading: false
      },
      todoAreaID: 'doing',
      todoItemID: 2
    } as DeleteONeTodoItemsByIDParams
    const resultExpected = {
      ...params.state,
      doing: [
        { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
        { id: 3, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
      ]
    } as StateTypeTodoLists
    const result = deleteOneTodoItemByID(params)
    expect(result).toEqual(resultExpected)
  })
})
