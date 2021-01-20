import reducer, {inititalState as inititalStateReducer, StateType} from './reducer'
import * as actionsTypes from './action-types' 

describe('auth reducer', () => {
  let inititalState: StateType

  beforeEach(() => {
    inititalState = {...inititalStateReducer}
  })

  test('should call reducer with type LOGIN_REQUEST and returns correct new state', () => {
    const newState = reducer(inititalState, { type: actionsTypes.LOGIN_REQUEST})
    expect(newState).toEqual({...inititalState, isLoading: true})
  })
  
  test('should call reducer with type LOGIN_SUCCESS and returns correct new state', () => {
    const action = {
      type: actionsTypes.LOGIN_SUCCESS,
      payload: {email: 'any_email', name: 'any_name', token: 'any_token'}
    
    }
    const state = inititalState
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState,
      isAuthenticated: true, 
      isLoading: false,
      errors: [],
      email: action.payload.email,
      name: action.payload.name,
      token: action.payload.token,
    })
  })

  test('should call reducer with type LOGIN_FAILURE and returns correct new state', () => {
    const state = {
      ...inititalState, 
    }
    const action = {
      type: actionsTypes.LOGIN_FAILURE,
      payload: { errors: ['any_error1', 'any_error2'] }
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState, 
      errors: ['any_error1', 'any_error2'], 
      isLoading: false
    })
  })

  test('should call reducer with type SIGNUP_REQUEST and returns correct new state', () => {
    const state = {
      ...inititalState,
      isLoading: true 
    }
    const action = {
      type: actionsTypes.SIGNUP_REQUEST,
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState, 
      isLoading: true
    })
  })

  test('should call reducer with type SIGNUP_SUCCESS and returns correct new state', () => {
    const action = {
      type: actionsTypes.SIGNUP_SUCCESS,
      payload: {email: 'any_email', name: 'any_name', token: 'any_token'}
    
    }
    const state = inititalState
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState,
      email: action.payload.email,
      token: action.payload.token,
      name: action.payload.name,
      isLoading: false,
      isAuthenticated: true, 
      errors: [],
    })
  })

  test('should call reducer with type SIGNUP_FAILURE and returns correct new state', () => {
    const state = {
      ...inititalState, 
    }
    const action = {
      type: actionsTypes.SIGNUP_FAILURE,
      payload: { errors: ['any_error1', 'any_error2'] }
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState, 
      errors: ['any_error1', 'any_error2'], 
      isLoading: false
    })
  })

  test('should call reducer with type LOGOFF_REQUEST and returns correct new state', () => {
    const state = {
      ...inititalState, 
    }
    const action = {
      type: actionsTypes.LOGOFF_REQUEST,
    }
    const newState = reducer(state, action)
    expect(newState).toEqual({
      ...inititalState, 
    })
  })
})