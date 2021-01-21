import { useCallback, useEffect, useState, MouseEvent } from 'react'
import { ErrorsAuthentication } from '../../components/feedback/errors-authentication'
import { ButtonAuthentication } from '../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../components/inputs/button-group-authentication'
import { FormAuthentication } from '../../components/inputs/form-authentication'

import { InputText } from '../../components/inputs/input-text'
import { LeftSideAuthentication } from '../../components/surfaces/left-side-authentication'
import { RightSideAuthentication } from '../../components/surfaces/right-side-authentication'
import { LOGIN_PAGE_ROUTE } from '../../routes/CONSTANTS'
import { IsLoading as IsLoadingComponent } from '../../components/feedback/is-loading'
import { routerHistory } from '../../adapters/router/routerHistory'
import * as actions from '../../store/modules/auth/actions'

import {
  Container
} from './styles'
import { signUpValidation } from '../../validations/signup-validation'
import { useDispatch, useSelector } from 'react-redux'
import { ReducersType } from '../../store/configs/root-reducer'
import { StateType as StateTypeAuth } from '../../store/modules/auth/reducer'

export const SignUpPage = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const dispatch = useDispatch()
  const { isLoading, errors } = useSelector<ReducersType>(state => state.auth) as StateTypeAuth

  useEffect(() => {
    dispatch(actions.logOffRequest())
  }, [dispatch])

  const handleOnClickButtonLoginPage = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault()
      routerHistory.push(LOGIN_PAGE_ROUTE)
    }, [])

  const handleOnClickButtonCreateAccount = useCallback(
    (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): void => {
      e.preventDefault()
      const errors = signUpValidation({ name, email, password, passwordConfirmation })
      if (errors.length > 0) return dispatch(actions.signUpFailure({ errors })) as any
      dispatch(actions.signUpRequest({ name, email, password, passwordConfirmation }))
    }, [email, name, password, passwordConfirmation, dispatch])

  return (
    <Container>
      <LeftSideAuthentication />
      <RightSideAuthentication titleHeader='Create your account'>
        <FormAuthentication>
          <InputText
            type='text'
            onChange={e => setName(e.target.value)}
            placeholder='Your name'
            value={name}
          />
          <InputText
            type='email'
            onChange={e => setEmail(e.target.value)}
            placeholder='Your email'
            value={email}
          />
          <InputText
            type='password'
            onChange={e => setPassword(e.target.value)}
            placeholder='Your password'
            value={password}
          />
          <InputText
            type='password'
            onChange={e => setPasswordConfirmation(e.target.value)}
            placeholder='Your password confirmation'
            value={passwordConfirmation}
          />
          <ButtonGroupAuthentication>
            <ButtonAuthentication onClick={e => handleOnClickButtonLoginPage(e)}>
              Login page
            </ButtonAuthentication>
            <ButtonAuthentication onClick={e => handleOnClickButtonCreateAccount(e)}>
              Create
            </ButtonAuthentication>
          </ButtonGroupAuthentication>
          <IsLoadingComponent isLoading={isLoading} />
          <ErrorsAuthentication errors={errors} />
        </FormAuthentication>
      </RightSideAuthentication>
    </Container>
  )
}
