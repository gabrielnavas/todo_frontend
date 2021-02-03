import { UserModel } from 'domain/models/User'
import { AnyAction } from 'redux'
import * as types from '../../configs/actions-reducer-types'
import {
  PayloadLoginFailure,
  PayloadLoginSuccess
} from './payload-types'

export type StateType = Omit<UserModel, 'password'> & {
  token: string
  name: string
  email: string
  isLoading: boolean
  isAuthenticated: boolean
  errors: string[]
}

export const inititalState: StateType = {
  token: null,
  name: null,
  email: null,
  isLoading: false,
  isAuthenticated: false,
  errors: []
}

const reducer = (state: StateType = inititalState, action: AnyAction) => {
  switch (action.type) {
    case types.authentication.LOGIN_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.authentication.LOGIN_SUCCESS: {
      const payload = action.payload as PayloadLoginSuccess
      const newState = {
        ...state,
        ...payload,
        isLoading: false,
        isAuthenticated: true,
        errors: [] as string[]
      }
      return newState
    }

    case types.authentication.LOGIN_FAILURE: {
      const payload = action.payload as PayloadLoginFailure
      const newState = { ...state }
      newState.errors = payload.errors
      newState.isLoading = false
      return newState
    }

    case types.authentication.SIGNUP_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.authentication.SIGNUP_SUCCESS: {
      const { email, name, token } = action.payload as PayloadLoginSuccess
      const newState = { ...state }
      newState.email = email
      newState.token = token
      newState.name = name
      newState.isLoading = false
      newState.isAuthenticated = true
      newState.errors = []
      return newState
    }

    case types.authentication.SIGNUP_FAILURE: {
      const newState = { ...state }
      const payload = action.payload as PayloadLoginFailure
      newState.errors = payload.errors
      newState.isLoading = false
      return newState
    }

    case types.authentication.LOGOFF_REQUEST: {
      return { ...inititalState }
    }

    default: {
      return state
    }
  }
}

export default reducer
