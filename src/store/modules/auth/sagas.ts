import { 
  call, 
  put, 
  all, 
  takeLatest,
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actions from './actions'
import { PayloadLoginRequest } from './types'
import * as types from '../../configs/actions-reducer-types'

import { routerHistory } from '../../../adapters/router/routerHistory'

import { TODO_PAGE_ROUTE } from '../../../routes/CONSTANTS'
import { 
  loginService, Response,  
} from '../../../services/login-service'

function* loginRequest( action: AnyAction) {
  const {email, password} = action.payload as PayloadLoginRequest
  try {
    const resp = (yield call(loginService, { email, password })) as Response
    if(resp.errors?.length > 0)  {
      return yield put(actions.loginFailure({ errors: resp.errors }))
    }
    
    yield put(actions.loginSuccess({ email, token: resp.body?.token, name: resp.body?.name}))
    routerHistory.push(TODO_PAGE_ROUTE)
  } catch(error) {
    yield put(actions.loginFailure({ errors: ['Serviço indisponível, tente novamente mais tarde.'] }))
  }
}

export const sagas = all([
  takeLatest(types.LOGIN_REQUEST, loginRequest)
])
