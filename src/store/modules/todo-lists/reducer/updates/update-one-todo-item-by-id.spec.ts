import { StateTypeTodoLists } from '../state-initital'
import {
  updateOneTodoItemByID,
  UpdateTodoItemByIDParams
} from './update-one-todo-item-by-id'

describe('reducer/updates/update-one-todo-item-by-id', () => {
  describe('update in same list', () => {
    test('should call updateOneTodoItemsById with correct params and return a correct new state', () => {
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
        oldTodoItem: {
          id: 2,
          description: 'any_description1',
          title: 'any_title',
          todoAreaID: 'doing'
        },
        newTodoItem: {
          id: 2,
          description: 'any_other_description',
          title: 'any_other_title',
          todoAreaID: 'doing'
        }

      } as UpdateTodoItemByIDParams
      const expectResult = {
        doing: [
          { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' },
          { id: 2, description: 'any_other_description', title: 'any_other_title', todoAreaID: 'doing' },
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
      } as StateTypeTodoLists
      const result = updateOneTodoItemByID(params)
      expect(result).toEqual(expectResult)
    })
  })
})
