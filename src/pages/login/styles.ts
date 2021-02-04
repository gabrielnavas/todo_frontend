import styled, { css } from 'styled-components'
import { EmailIcon, GoToLoginPageIcon, IconLogin, PasswordIcon } from 'styles/icons'

export const Container = styled.div`
  display: flex;
  height: 100%;
`
export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    margin: 0 4px 0 4px;
  }
`

const heightInput = css`
  height: 30px;
`

const iconButtons = css`
  margin: 0 4px 0 4px;
  ${heightInput}
  width: 30px;
`

export const IconLoginButton = styled(IconLogin)`
  ${iconButtons}
  fill:  var(--blue);
`

export const GoToSignUpPageIcon = styled(GoToLoginPageIcon)`
  ${iconButtons}
  fill:  var(--white);
`

const iconInput = css`
  ${heightInput}
  margin: 0 9px 0 5px;
  width: 30px;
  fill: var(--gray-light);
`

export const PasswordIconInput = styled(PasswordIcon)`
  ${iconInput}
`

export const EmailIconInput = styled(EmailIcon)`
  ${iconInput}
`
