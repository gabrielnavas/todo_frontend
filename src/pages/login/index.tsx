import { useCallback, useEffect, useState, MouseEvent } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { Container } from './styles'
import { ButtonAuthentication } from '../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../components/inputs/button-group-authentication'
import { InputText } from '../../components/inputs/input-text'
import { LeftSideAuthentication } from '../../components/surfaces/left-side-authentication'
import { RightSideAuthentication } from '../../components/surfaces/right-side-authentication'
import { FormAuthentication } from '../../components/inputs/form-authentication'
import { ErrorsAuthentication } from '../../components/feedback/errors-authentication'
import { IsLoading as IsLoadingComponent } from '../../components/feedback/is-loading'

import { routerHistory } from '../../adapters/router/routerHistory'

import * as actions from '../../store/modules/auth/actions'
import { ReducersType } from '../../store/configs/root-reducer'
import { StateType as StateTypeAuth } from '../../store/modules/auth/reducer'
import { SIGNUP_PAGE_ROUTE } from '../../routes/CONSTANTS'
import { loginValidation } from '../../validations/login-validation'

export const LoginPage = () => {
  const dispatch = useDispatch()
  const { isLoading, errors } = useSelector<ReducersType>(state => state.auth) as StateTypeAuth

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    dispatch(actions.logOffRequest())
  }, [dispatch])

  const handleOnClickButtonLogin = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault()
      const errors = loginValidation({ email, password })
      if (errors.length > 0) return dispatch(actions.loginFailure({ errors })) as any
      dispatch(actions.loginRequest({ email, password }))
    }, [email, password, dispatch])

  return (
    <Container>
      <LeftSideAuthentication />
      <RightSideAuthentication titleHeader='Login in your Todo App'>
        <FormAuthentication>
          <InputText
            placeholder='your email...'
            type='email'
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <InputText
            placeholder='your password...'
            type='password'
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <ButtonGroupAuthentication>
            <ButtonAuthentication
              disabled={isLoading}
              onClick={e => routerHistory.push(SIGNUP_PAGE_ROUTE)}>
              SignUp Page
            </ButtonAuthentication>
            <ButtonAuthentication
              disabled={isLoading}
              onClick={e => handleOnClickButtonLogin(e)}>
              Login
            </ButtonAuthentication>
          </ButtonGroupAuthentication>
          <ErrorsAuthentication errors={errors} />
          <IsLoadingComponent isLoading={isLoading}/>
        </FormAuthentication>
      </RightSideAuthentication>
    </Container>
  )
}
