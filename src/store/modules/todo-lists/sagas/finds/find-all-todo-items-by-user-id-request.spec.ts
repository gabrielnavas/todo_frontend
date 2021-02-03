import sagaHelper from 'redux-saga-testing'
import {
  findAllTodoItemByUserIdRequestSaga as sagas
} from './find-all-todo-items-by-user-id-request'
import * as findActions from '../../actions/finds/find-all'
import * as findService from '../../../../../infra/services/find-all-todo-items-by-id-service'
import { call, put, select } from 'redux-saga/effects'
import { ReducersType } from 'store/configs/root-reducer'

describe('When testing a very simple generator (not even a Saga)', () => {
  describe('Scenario 1: success request', () => {
    const it = sagaHelper(sagas(findActions.request()))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        findService.findAllTodoItemsByIdService, {
          token: 'any_user_token'
        }
      ))
      return {
        errors: [],
        body: [
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' }
          ],
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
          ],
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
          ]
        ]
      }
    })

    it('should call action login success', result => {
      expect(result).toEqual(put(findActions.success({
        todoItemsLists: [
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' },
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'todo' }
          ],
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'done' }
          ],
          [
            { id: 1, description: 'any_description1', title: 'any_title', todoAreaID: 'doing' }
          ]
        ]
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  // describe('Scenario 2: success, but has errors', () => {
  //   const it = sagaHelper(sagas(deleteActions.request({
  //     todoAreaID: 'doing',
  //     todoItemID: 1
  //   })))

  //   it('should call select get auth token', result => {
  //     const resultSelect = select((state:ReducersType) => state.auth.token)
  //     expect(JSON.stringify(result))
  //       .toEqual(JSON.stringify(resultSelect))
  //     return 'any_user_token'
  //   })

  //   it('should call login service', result => {
  //     expect(result).toEqual(call(
  //       deleteService.deleteOneTodoItemByIdService, {
  //         todoItemID: 1,
  //         userTokenAccess: 'any_user_token'
  //       }
  //     ))
  //     return {
  //       errors: ['any_error1', 'any_error2']
  //     } as deleteService.Result
  //   })

  //   it('should call action login success', result => {
  //     expect(result).toEqual(put(deleteActions.failure({
  //       errors: ['any_error1', 'any_error2']
  //     })))
  //   })

  //   it('and finish', result => {
  //     expect(result).toBeUndefined()
  //   })
  // })

  // describe('Scenario 3: failue with errors request', () => {
  //   const it = sagaHelper(sagas(deleteActions.request({
  //     todoAreaID: 'doing',
  //     todoItemID: 1
  //   })))

  //   it('should call select get auth token', result => {
  //     const resultSelect = select((state:ReducersType) => state.auth.token)
  //     expect(JSON.stringify(result))
  //       .toEqual(JSON.stringify(resultSelect))
  //     return 'any_user_token'
  //   })

  //   it('should call login service', result => {
  //     expect(result).toEqual(call(
  //       deleteService.deleteOneTodoItemByIdService, {
  //         todoItemID: 1,
  //         userTokenAccess: 'any_user_token'
  //       }
  //     ))
  //     return new Error('any_error')
  //   })

  //   it('should call action login success', result => {
  //     expect(result).toEqual(put(deleteActions.failure({
  //       errors: ['Serviço indisponível, tente novamente mais tarde.']
  //     })))
  //   })

  //   it('and finish', result => {
  //     expect(result).toBeUndefined()
  //   })
  // })
})
