import styled, { css } from 'styled-components'
import { GoToLoginPageIcon, IconLogin } from 'styles/icons'

export const Container = styled.div`
  display: flex;
  height: 100%;
`
export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
const iconButtons = css`
  margin: 0 4px 0 4px;
  height: 30px;
  width: 30px;
`

export const IconLoginButton = styled(IconLogin)`
  ${iconButtons}
  fill:  var(--blue);
`
export const GoToLoginPageIconButton = styled(GoToLoginPageIcon)`
  ${iconButtons}
  fill:  var(--white);
`
