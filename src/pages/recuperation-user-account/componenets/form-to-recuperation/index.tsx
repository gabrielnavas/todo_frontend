import { useCallback, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'

import {
  ButtonContent,
  EmailIconInput,
  GoToSignUpPageIcon,
  RecuperetePasswordIconButton
} from './styles'

import { ButtonAuthentication } from '../../../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../../../components/inputs/button-group-authentication'
import { InputText } from '../../../../components/inputs/input-text'
import { FormAuthentication } from '../../../../components/inputs/form-authentication'
import { ErrorsAuthentication } from '../../../../components/feedback/errors-authentication'
import { IsLoading as IsLoadingComponent } from '../../../../components/feedback/is-loading'

import * as actionsAuthentication from '../../../../store/modules/auth/actions'

import { routerHistory } from '../../../../adapters/router/routerHistory'
import { LOGIN_PAGE_ROUTE } from '../../../../routes/CONSTANTS'
import { recuperateAccountValidation } from 'validations/recuperate-account-validation'
import { recuperateUserAccountService } from 'infra/services/recuperete-user-account'

type Props = {
  setRecuperationFinish: (finish: boolean) => void
}

export const FormToRecuperation = ({ setRecuperationFinish }: Props) => {
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [errors, setErrors] = useState([] as string[])
  const [email, setEmail] = useState('')

  useEffect(() => {
    dispatch(actionsAuthentication.logOffRequest())
  }, [dispatch])

  const service = useCallback(async (emailParam: string): Promise<boolean> => {
    try {
      const errorsService = await recuperateUserAccountService({ email: emailParam })
      if (errorsService.errors.length > 0) {
        setIsLoading(false)
        setErrors(errorsService.errors)
        return false
      }
      setRecuperationFinish(true)
    } catch (error) {
      console.log(error)
      setErrors(['Ocorreu um erro, tente novamente mais tarde.'])
    } finally {
      setIsLoading(false)
    }
    return true
  }, [email, errors, isLoading])

  const validations = useCallback((emailParam: string) => {
    const errorsValidation = recuperateAccountValidation({ email: emailParam })
    if (errorsValidation.length > 0) {
      setIsLoading(false)
      setErrors(errorsValidation)
      return false
    }
    return true
  }, [email, errors, isLoading])

  const handleOnClickButtonLogin = useCallback(async (e: any): Promise<void> => {
    e.preventDefault()
    setIsLoading(true)
    if (!validations(email)) return
    if (service(email)) {
      setEmail('')
    }
  }, [email, errors, isLoading])

  return (
      <FormAuthentication>
        <InputText
          Icon={<EmailIconInput />}
          placeholder='your email...'
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <ButtonGroupAuthentication>
          <ButtonAuthentication
            disabled={isLoading}
            onClick={e => routerHistory.push(LOGIN_PAGE_ROUTE)}>
            <ButtonContent>
              <GoToSignUpPageIcon />
              <span>
                Login
              </span>
            </ButtonContent>
          </ButtonAuthentication>
          <ButtonAuthentication
            disabled={isLoading}
            onClick={e => handleOnClickButtonLogin(e)}>
            <ButtonContent>
              <RecuperetePasswordIconButton />
              <span>
                Recuperete
              </span>
            </ButtonContent>
          </ButtonAuthentication>
        </ButtonGroupAuthentication>
        <ErrorsAuthentication errors={errors} />
        <IsLoadingComponent isLoading={isLoading}/>
    </FormAuthentication>
  )
}
