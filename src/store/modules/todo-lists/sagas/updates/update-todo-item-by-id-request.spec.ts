import sagaHelper from 'redux-saga-testing'
import {
  updateOneTodoItemByIDRequestSaga as sagas
} from './update-todo-item-by-id-request'
import * as updateActions from '../../actions/updates/update-one-todo-item-by-id'
import * as updateService from '../../../../../infra/services/update-one-todo-item-by-id-service'
import { call, put, select } from 'redux-saga/effects'
import { ReducersType } from 'store/configs/root-reducer'

describe('insertOneTodoItemRequestSaga', () => {
  describe('Scenario 1: success request', () => {
    const requestParams = {
      oldTodoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      },
      todoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      }
    } as updateActions.ParamsRequest
    const it = sagaHelper(sagas(updateActions.request(requestParams)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        updateService.updateOneTodoItemByIdservice, {
          todoItem: {
            id: 1,
            description: 'any_description_update',
            title: 'any_title',
            todoAreaID: 'done'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return {
        errors: [],
        body: {
          id: 1,
          description: 'any_description_update',
          title: 'any_title',
          todoAreaID: 'done'
        }
      }
    })

    it('should call action login success', result => {
      expect(result).toEqual(put(updateActions.success({
        oldTodoItem: {
          id: 1,
          description: 'any_description_update',
          title: 'any_title',
          todoAreaID: 'done'
        },
        todoItem: {
          id: 1,
          description: 'any_description_update',
          title: 'any_title',
          todoAreaID: 'done'
        }

      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 2: success, but has errors', () => {
    const requestParams = {
      oldTodoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      },
      todoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      }
    } as updateActions.ParamsRequest
    const it = sagaHelper(sagas(updateActions.request(requestParams)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        updateService.updateOneTodoItemByIdservice, {
          todoItem: {
            id: 1,
            description: 'any_description_update',
            title: 'any_title',
            todoAreaID: 'done'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return {
        errors: ['any_error1', 'any_error2']
      }
    })

    it('should call action login failure', result => {
      expect(result).toEqual(put(updateActions.failure({
        errors: ['any_error1', 'any_error2']
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 3: failue with errors request', () => {
    const requestParams = {
      oldTodoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      },
      todoItem: {
        id: 1,
        description: 'any_description_update',
        title: 'any_title',
        todoAreaID: 'done'
      }
    } as updateActions.ParamsRequest
    const it = sagaHelper(sagas(updateActions.request(requestParams)))

    it('should call select get auth token', result => {
      const resultSelect = select((state:ReducersType) => state.auth.token)
      expect(JSON.stringify(result))
        .toEqual(JSON.stringify(resultSelect))
      return 'any_user_token'
    })

    it('should call login service', result => {
      expect(result).toEqual(call(
        updateService.updateOneTodoItemByIdservice, {
          todoItem: {
            id: 1,
            description: 'any_description_update',
            title: 'any_title',
            todoAreaID: 'done'
          },
          userTokenAccess: 'any_user_token'
        }
      ))
      return new Error('any_error')
    })

    it('should call action login failure', result => {
      expect(result).toEqual(put(updateActions.failure({
        errors: ['Serviço indisponível, tente novamente mais tarde.']
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })
})
