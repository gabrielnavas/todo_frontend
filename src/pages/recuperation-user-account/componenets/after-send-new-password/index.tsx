import {
  Container,
  Message,
  ButtonContent,
  GoToSignUpPageIcon
} from './styles'

import { ButtonAuthentication } from '../../../../components/inputs/button-authentication'
import { ButtonGroupAuthentication } from '../../../../components/inputs/button-group-authentication'
import { routerHistory } from 'adapters/router/routerHistory'
import { LOGIN_PAGE_ROUTE } from 'routes/CONSTANTS'

export const AfterSendNewPassword = () => {
  return (
    <Container>
      <Message>
        Check your email and see you temporary password
      </Message>
      <ButtonGroupAuthentication>
        <ButtonAuthentication
          onClick={e => routerHistory.push(LOGIN_PAGE_ROUTE)}>
          <ButtonContent>
            <GoToSignUpPageIcon />
            <span>
              Login Page
            </span>
          </ButtonContent>
        </ButtonAuthentication>
      </ButtonGroupAuthentication>
    </Container>
  )
}
