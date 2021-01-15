import * as types from '../../configs/actions-reducer-types'
import { PayloadLoginSuccess } from './types'

type ActionType = {
  type: string, 
  payload?: any
}

export type StateTypeAuth = {
  token: string
  name: string
  email: string
  isLoading: boolean
  isAuthenticated: boolean
}

const inititalState: StateTypeAuth =  {
  token: null,
  name: null,
  email: null,
  isLoading: false,
  isAuthenticated: false
}

const reducer = (state: StateTypeAuth = inititalState, action: ActionType) => {
  switch (action.type) {
    case types.LOGIN_REQUEST: {
      const newState = {...state}
      newState.isLoading = true
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
      return newState;
    }

    case types.LOGIN_FAILURE: {
      const newState = {...inititalState}
      return newState
    }

    default: {
      
      return state;
    }
  }
}
  
export default reducer