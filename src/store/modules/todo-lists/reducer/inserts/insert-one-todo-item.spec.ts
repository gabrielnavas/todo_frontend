import {
  insertOneTodoItem,
  InsertOneTodoItemParams
} from './insert-one-todo-item'

describe('reducer/inserts/insert-one-todo-item', () => {
  test('should call insertOneTodoItem and return a new state with the a newtodo item', () => {
    const params = {
      newState: {
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
      newTodoItem: {
        id: 2,
        description: 'any_description1',
        title: 'any_title',
        todoAreaID: 'done'
      }
    } as InsertOneTodoItemParams
    const resultExpected = {
      doing: [
        { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
        { id: 2, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
        { id: 3, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
      ],
      done: [
        { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' },
        params.newTodoItem
      ],
      todo: [
        { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' }
      ],
      errors: ['any_error1', 'any_error2'],
      isLoading: false
    }
    const result = insertOneTodoItem(params)
    expect(result).toEqual(resultExpected)
  })
})
