import {
  call,
  put,
  all,
  takeLatest
} from 'redux-saga/effects'
import { AnyAction } from 'redux'

import * as actions from './actions'
import * as payloadTypes from './payload-types'
import * as types from './action-types'

import { routerHistory } from '../../../adapters/router/routerHistory'

import { TODO_PAGE_ROUTE } from '../../../routes/CONSTANTS'
import { loginService } from '../../../infra/services/login-service'
import { signupService, SignUpServiceResponse } from '../../../infra/services/signup-service'

export function * loginRequest (action: AnyAction) {
  const { email, password } = action.payload as payloadTypes.PayloadLoginRequest
  try {
    const resp = (yield call(loginService, { email, password })) as SignUpServiceResponse
    if (resp.errors.length > 0) {
      yield put(actions.loginFailure({ errors: resp.errors }))
      return
    }
    yield put(actions.loginSuccess({
      email: resp.body?.email,
      token: resp.body?.token,
      name: resp.body?.userName
    }))
    routerHistory.push(TODO_PAGE_ROUTE)
  } catch (error) {
    yield put(actions.loginFailure({
      errors: ['Serviço indisponível, tente se logar mais tarde.']
    }))
  }
}

export function * signUpRequest (action: AnyAction) {
  const userSignupDatas = action.payload as payloadTypes.PayloadSignUpRequest
  try {
    const resp = (yield call(signupService, userSignupDatas))
    console.log(resp)
    if (resp.errors.length > 0) {
      yield put(actions.signUpFailure({ errors: resp.errors }))
      return
    }

    yield put(actions.signUpSuccess({
      email: resp.body.email,
      token: resp.body.token,
      name: resp.body.name
    }))
    routerHistory.push(TODO_PAGE_ROUTE)
  } catch (error) {
    yield put(actions.signUpFailure({
      errors: ['Serviço indisponível, tente se cadastrar mais tarde.']
    }))
  }
}

export const sagas = all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.SIGNUP_REQUEST, signUpRequest)
])
