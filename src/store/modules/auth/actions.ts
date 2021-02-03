import * as types from '../../configs/actions-reducer-types'
import * as payloadTypes from './payload-types'

export const loginRequest = (payload: payloadTypes.PayloadLoginRequest) => {
  return {
    type: types.authentication.LOGIN_REQUEST,
    payload
  }
}

export const loginSuccess = (payload: payloadTypes.PayloadLoginSuccess) => {
  return {
    type: types.authentication.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (payload: payloadTypes.PayloadLoginFailure) => ({
  type: types.authentication.LOGIN_FAILURE,
  payload
})

export const signUpRequest = (payload: payloadTypes.PayloadSignUpRequest) => ({
  type: types.authentication.SIGNUP_REQUEST,
  payload
})

export const signUpSuccess = (payload: payloadTypes.PayloadSignUpSuccess) => ({
  type: types.authentication.SIGNUP_SUCCESS,
  payload
})

export const signUpFailure = (payload: payloadTypes.PayloadSignUpFailure) => ({
  type: types.authentication.SIGNUP_FAILURE,
  payload
})

export const logOffRequest = () => ({
  type: types.authentication.LOGOFF_REQUEST
})
