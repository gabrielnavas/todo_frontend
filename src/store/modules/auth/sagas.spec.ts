import sagaHelper from 'redux-saga-testing'
import { loginRequest as loginRequestSaga } from './sagas'
import { loginFailure, loginRequest as loginRequestAction, loginSuccess } from './actions'
import { loginService } from '../../../infra/services/login-service'
import { call, put } from 'redux-saga/effects'

describe('When testing a very simple generator (not even a Saga)', () => {
  describe('Scenario 1: success request', () => {
    const loginRequestActionParams = {
      email: 'any_email',
      password: 'any_password'
    }
    const returnOfTheLoginService = {
      body: {
        email: 'any_email',
        token: 'any_token',
        userName: 'any_name'
      },
      errors: [] as string[]
    }

    const actionParams = loginRequestAction(loginRequestActionParams)
    const it = sagaHelper(loginRequestSaga(actionParams))

    it('should call login service', result => {
      expect(result).toEqual(call(loginService, loginRequestActionParams))
      return returnOfTheLoginService
    })

    it('should call action login success', result => {
      const paramsLoginSuccess = {
        email: returnOfTheLoginService.body.email,
        token: 'any_token',
        name: returnOfTheLoginService.body.userName
      }
      expect(result).toEqual(put(loginSuccess(paramsLoginSuccess)))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 2: success, but has errors', () => {
    const loginRequestActionParams = {
      email: 'any_email',
      password: 'any_password'
    }
    const returnOfTheLoginService = {
      errors: ['any_error1', 'any_error2', 'any_error3'] as string[]
    }

    const actionParams = loginRequestAction(loginRequestActionParams)
    const it = sagaHelper(loginRequestSaga(actionParams))

    it('should call login service', result => {
      expect(result).toEqual(call(loginService, loginRequestActionParams))
      return returnOfTheLoginService
    })

    it('should call action login success', result => {
      const paramsLoginSuccess = {
        errors: returnOfTheLoginService.errors
      }
      expect(result).toEqual(put(loginFailure({
        errors: paramsLoginSuccess.errors
      })))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })

  describe('Scenario 3: failue with errors request', () => {
    const loginRequestActionParams = {
      email: 'any_email',
      password: 'any_password'
    }

    const actionParams = loginRequestAction(loginRequestActionParams)
    const it = sagaHelper(loginRequestSaga(actionParams))

    it('should call login service', result => {
      expect(result).toEqual(call(loginService, loginRequestActionParams))
      return new Error('any_error')
    })

    it('should call action login success', result => {
      const paramsLoginSuccess = {
        errors: ['Serviço indisponível, tente se logar mais tarde.']
      }
      expect(result).toEqual(put(loginFailure(paramsLoginSuccess)))
    })

    it('and finish', result => {
      expect(result).toBeUndefined()
    })
  })
})
