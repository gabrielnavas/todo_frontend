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

export const inititalState = () => ({
  token: null,
  name: null,
  email: null,
  isLoading: false,
  isAuthenticated: false,
  errors: [] as string[]
}) as StateType

const reducer = (state: StateType = inititalState(), action: AnyAction): StateType => {
  switch (action.type) {
    case types.authentication.LOGIN_REQUEST: {
      const newState = { ...state }
      newState.isLoading = true
      return newState
    }

    case types.authentication.LOGIN_SUCCESS: {
      const { name, email, token } = action.payload as PayloadLoginSuccess
      const newState = {
        ...inititalState(),
        name,
        email,
        token,
        isAuthenticated: true
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
      return {
        ...inititalState(),
        email,
        token,
        name,
        isAuthenticated: true
      }
    }

    case types.authentication.SIGNUP_FAILURE: {
      const newState = { ...state }
      const payload = action.payload as PayloadLoginFailure
      newState.errors = payload.errors
      newState.isLoading = false
      return newState
    }

    case types.authentication.LOGOFF_REQUEST: {
      return { ...inititalState() }
    }

    default: {
      return state
    }
  }
}

export default reducer
