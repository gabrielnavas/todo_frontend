import { useCallback, useState } from 'react'
import { ButtonAuthentication } from '../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../components/inputs/button-group-authentication'
import { InputText } from '../../components/inputs/input-text'
import { LeftSideAuthentication } from '../../components/surfaces/left-side-authentication'
import { RightSideAuthentication } from '../../components/surfaces/right-side-authentication'
import { FormAuthentication } from '../../components/inputs/form-authentication'
import {
  Container
} from './styles'
import { SIGNUP_PAGE_ROUTE, TODO_PAGE_ROUTE } from '../../routes/CONSTANTS'
import { loginValidation } from '../../validations/authentication-page/login-validation'
import {routerHistory} from '../../adapters/router/routerHistory'
import { ErrorsAuthentication } from '../../components/feedback/errors-authentication'
import { loginService } from '../../services/login-service'
import { useDispatch, useSelector } from 'react-redux'
import * as actions from '../../store/modules/auth/actions'
import { ReducersType } from '../../store/configs/root-reducer'
import { StateTypeAuth } from '../../store/modules/auth/reducer'

export const LoginPage = () => {

  const dispatch = useDispatch()
  const {isLoading}  = useSelector<ReducersType>(state => state.auth) as StateTypeAuth

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleOnClickButtonLogin = useCallback(async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): Promise<void> => {
    e.preventDefault()
    const errors = loginValidation({email, password})
    if(errors.length > 0) return setErrors(errors)
    try {
      dispatch(actions.loginRequest())
      const result = await loginService({email, password})
      if(result.errors.length > 0) return setErrors(result.errors)
      dispatch(actions.loginSuccess(result.body))
      routerHistory.push(TODO_PAGE_ROUTE)
    }
    catch(error) {
      dispatch(actions.loginFailure())
    }
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
              onClick={handleOnClickButtonLogin}>
              Login
            </ButtonAuthentication>
          </ButtonGroupAuthentication>
          <ErrorsAuthentication errors={errors} />
          {
              isLoading && <h1>Loading</h1>
          }
        </FormAuthentication>
      </RightSideAuthentication>
    </Container>
  )
}