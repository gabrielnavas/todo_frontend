import { useCallback, useState } from 'react'
import { ErrorsAuthentication } from '../../components/feedback/errors-authentication'
import { ButtonAuthentication } from '../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../components/inputs/button-group-authentication'
import { FormAuthentication } from '../../components/inputs/form-authentication'

import { InputText } from '../../components/inputs/input-text'
import { LeftSideAuthentication } from '../../components/surfaces/left-side-authentication'
import { RightSideAuthentication } from '../../components/surfaces/right-side-authentication'
import { LOGIN_PAGE_ROUTE } from '../../routes/CONSTANTS'
import { signupService } from '../../services/signup-service'
// import { signUpValidation } from '../../validations/authentication-page/signup-validation'
import {routerHistory} from '../../adapters/router/routerHistory'

import {
  Container, 
} from './styles'
import { signUpValidation } from '../../validations/signup-validation'

export const SignUpPage = () => {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState<string[]>([])

  const handleOnClickButtonLoginPage = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    routerHistory.push(LOGIN_PAGE_ROUTE)
  }, [])
  
  const handleOnClickButtonCreateAccount = useCallback((event: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    event.preventDefault()
    const errors = signUpValidation({name, email, password, passwordConfirmation})
    if(errors.length > 0) return setErrors(errors)
    signupService({name, email, password, passwordConfirmation})
      .then(result => {
        if(result.errors.length > 0 ) return setErrors([...result.errors])
        routerHistory.push(LOGIN_PAGE_ROUTE)
      })
      .catch(error => {
        console.log(error)
        setErrors(['Não foi possível realizar o servico, tente novamente mais tarde.'])
      })
  }, [email, name, password, passwordConfirmation])

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
            <ButtonAuthentication onClick={handleOnClickButtonLoginPage}>
              Login page
            </ButtonAuthentication>
            <ButtonAuthentication onClick={handleOnClickButtonCreateAccount}>
              Create
            </ButtonAuthentication>
          </ButtonGroupAuthentication>
          <ErrorsAuthentication errors={errors} />
        </FormAuthentication>
      </RightSideAuthentication>
    </Container>
  )
}