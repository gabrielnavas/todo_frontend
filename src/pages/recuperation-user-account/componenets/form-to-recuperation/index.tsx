import { useCallback, useEffect, useState, MouseEvent } from 'react'
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

  const handleOnClickButtonLogin = useCallback(
    async (e: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>): Promise<void> => {
      e.preventDefault()
      setIsLoading(true)
      const errors = recuperateAccountValidation({ email })
      if (errors.length > 0) {
        setIsLoading(false)
        return setErrors(errors)
      }
      try {
        await recuperateUserAccountService({ email })
        setRecuperationFinish(true)
      } catch {
        setErrors(['Ocorreu um erro, tenta novamente mais tarde.'])
      } finally {
        setIsLoading(false)
      }
    }, [email, dispatch])

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
