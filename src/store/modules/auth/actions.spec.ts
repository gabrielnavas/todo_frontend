import * as actions from './actions'
import * as types from '../../configs/actions-reducer-types'

describe('auth actions', () => {
  test('should call loginRequest and return correct data', () => {
    const action = actions.loginRequest({ email: 'any_email', password: 'any_password' })
    expect(action).toEqual({
      type: types.authentication.LOGIN_REQUEST,
      payload: { email: 'any_email', password: 'any_password' }
    })
  })

  test('should call loginSuccess and return correct data', () => {
    const action = actions.loginSuccess({ name: 'any_name', email: 'any_email', token: 'any_password' })
    expect(action).toEqual({
      type: types.authentication.LOGIN_SUCCESS,
      payload: { name: 'any_name', email: 'any_email', token: 'any_password' }
    })
  })

  test('should call loginFailure and return correct data', () => {
    const action = actions.loginFailure({ errors: ['any_error1', 'any_error2', 'any_error3'] })
    expect(action).toEqual({
      type: types.authentication.LOGIN_FAILURE,
      payload: { errors: ['any_error1', 'any_error2', 'any_error3'] }
    })
  })

  test('should call signUpRequest and return correct data', () => {
    const action = actions.signUpRequest({
      name: 'any_name',
      email: 'any_email',
      password: 'any_password',
      passwordConfirmation: 'any_password'
    })
    expect(action).toEqual({
      type: types.authentication.SIGNUP_REQUEST,
      payload: {
        name: 'any_name',
        email: 'any_email',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    })
  })

  test('should call signUpSuccess and return correct data', () => {
    const action = actions.signUpSuccess({
      name: 'any_name',
      email: 'any_email',
      token: 'any_token'
    })
    expect(action).toEqual({
      type: types.authentication.SIGNUP_SUCCESS,
      payload: {
        name: 'any_name',
        email: 'any_email',
        token: 'any_token'
      }
    })
  })

  test('should call signUpFailure and return correct data', () => {
    const action = actions.signUpFailure({ errors: ['any_error1', 'any_error2', 'any_error3'] })
    expect(action).toEqual({
      type: types.authentication.SIGNUP_FAILURE,
      payload: { errors: ['any_error1', 'any_error2', 'any_error3'] }
    })
  })

  test('should call logOffRequest and return correct data', () => {
    const action = actions.logOffRequest()
    expect(action).toEqual({
      type: types.authentication.LOGOFF_REQUEST
    })
  })
})
