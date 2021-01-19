import { AnyAction } from 'redux'
import * as types from '../../configs/actions-reducer-types'
import { PayloadLoginFailure, PayloadLoginSuccess } from './types'

export type StateTypeAuth = {
  token: string
  name: string
  email: string
  isLoading: boolean
  isAuthenticated: boolean
  errors: string[]
}

const inititalState: StateTypeAuth =  {
  token: null,
  name: null,
  email: null,
  isLoading: false,
  isAuthenticated: false,
  errors: []
}

const reducer = (state: StateTypeAuth = inititalState, action: AnyAction) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = {...state}
      newState.isLoading = true
      console.log('passei no LOGIN_REQUEST: newState => ', newState)
      console.log('passei no LOGIN_REQUEST: action => ', action)
      return newState
    }

    case types.LOGIN_SUCCESS: {
      const {email, name, token} = action.payload as PayloadLoginSuccess
      const newState = {...state}
      newState.email = email
      newState.token = token
      newState.name = name
      newState.isLoading = false
      newState.isAuthenticated = true
      newState.errors = []
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = {...state}
      const payload = action.payload as PayloadLoginFailure
      newState.errors = payload.errors
      newState.isLoading = false
      return newState
    }

    case types.LOGOFF_REQUEST: {
      return {...inititalState}
    }

    default: {
      
      return state;
    }
  }
}
  
export default reducer