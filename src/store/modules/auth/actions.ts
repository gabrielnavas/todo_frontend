import * as types from '../../configs/actions-reducer-types';
import {PayloadLoginSuccess} from './types'

export const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  }
}

export const loginSuccess = (payload: PayloadLoginSuccess) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload
  }
}

export const loginFailure = () => ({
  type: types.LOGIN_FAILURE,
})
