import sagaHelper from 'redux-saga-testing'
import {
  insertOneTodoItemRequestSaga as sagas
} from './insert-one-todo-item-request'
import * as insertActions from '../../actions/inserts/insert-one-todo-item'
import * as insertService from '../../../../../infra/services/insert-one-todo-item-service'
import { call, put, select } from 'redux-saga/effects'
import { ReducersType } from 'store/configs/root-reducer'

describe('insertOneTodoItemRequestSaga', () => {
  describe('Scenario 1: success request', () => {
    const paramsRequest = {
      description: 'any_description',
      title: 'any_title',
      todoAreaID: 'todo'
    } as insertActions.ParamsRequest
    const it = sagaHelper(sagas(insertActions.request(paramsRequest)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        insertService.insertOneTodoItemService, {
          todoItem: {
            description: 'any_description',
            title: 'any_title',
            todoAreaID: 'todo'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return {
        errors: [],
        body: {
          id: 1,
          description: 'any_description',
          title: 'any_title',
          todoAreaID: 'todo'
        }
      }
    })

    it('should call action login success', result => {
      expect(result).toEqual(put(insertActions.success({
        todoItem: {
          id: 1,
          description: 'any_description',
          title: 'any_title',
          todoAreaID: 'todo'
        }
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 2: success, but has errors', () => {
    const paramsRequest = {
      description: 'any_description',
      title: 'any_title',
      todoAreaID: 'todo'
    } as insertActions.ParamsRequest
    const it = sagaHelper(sagas(insertActions.request(paramsRequest)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        insertService.insertOneTodoItemService, {
          todoItem: {
            description: 'any_description',
            title: 'any_title',
            todoAreaID: 'todo'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return {
        errors: ['any_erro1', 'any_error2']
      }
    })

    it('should call action login failure', result => {
      expect(result).toEqual(put(insertActions.failure({
        errors: ['any_erro1', 'any_error2']
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 3: failue with errors request', () => {
    const paramsRequest = {
      description: 'any_description',
      title: 'any_title',
      todoAreaID: 'todo'
    } as insertActions.ParamsRequest
    const it = sagaHelper(sagas(insertActions.request(paramsRequest)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        insertService.insertOneTodoItemService, {
          todoItem: {
            description: 'any_description',
            title: 'any_title',
            todoAreaID: 'todo'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return new Error('any_error')
    })

    it('should call action login failure', result => {
      expect(result).toEqual(put(insertActions.failure({
        errors: ['Serviço indisponível, tente novamente mais tarde.']
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })
})
