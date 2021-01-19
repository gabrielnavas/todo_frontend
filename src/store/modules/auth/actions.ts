import * as types from '../../configs/actions-reducer-types';
import {
  PayloadLoginSuccess, 
  PayloadLoginRequest, 
  PayloadLoginFailure
} from './types'

export const loginRequest = (payload: PayloadLoginRequest) => {
  return {
    type: types.LOGIN_REQUEST,
    payload
  }
}

export const loginSuccess = (payload: PayloadLoginSuccess) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = (payload: PayloadLoginFailure) => ({
  type: types.LOGIN_FAILURE,
  payload
})

export const logoffRequest = () => ({
  type: types.LOGOFF_REQUEST,
})