import * as types from '../../configs/actions-reducer-types';
import * as payloadTypes from './types'

export const loginRequest = (payload: payloadTypes.PayloadLoginRequest) => {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export const loginSuccess = (payload: payloadTypes.PayloadLoginSuccess) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (payload: payloadTypes.PayloadLoginFailure) => ({
  type: types.LOGIN_FAILURE,
  payload
})

export const signUpRequest = (payload: payloadTypes.PayloadSignUpRequest) => ({
  type: types.SIGNUP_REQUEST,
  payload
})

export const signUpSuccess = (payload: payloadTypes.PayloadSignUpSuccess) => ({
  type: types.SIGNUP_SUCCESS,
  payload
})


export const signUpFailure = (payload: payloadTypes.PayloadSignUpFailure) => ({
  type: types.SIGNUP_FAILURE,
  payload
})

export const logOffRequest = () => ({
  type: types.LOGOFF_REQUEST,
})