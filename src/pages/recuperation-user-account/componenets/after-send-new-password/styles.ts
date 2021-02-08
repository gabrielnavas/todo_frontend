import styled, { css } from 'styled-components'
import { GoToLoginPageIcon } from 'styles/icons'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 450px;
  margin-bottom: 50px;
`

export const Message = styled.span`
  color: var(--white);
  font-weight: bold;
  font-size: 30px;
`

export const ButtonContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  > span {
    color: var(--blue);
    margin: 0 4px 0 4px;
  }
`

const iconButtons = css`
  margin: 0 4px 0 4px;
  height: 30px;
  width: 30px;
`

export const GoToSignUpPageIcon = styled(GoToLoginPageIcon)`
  ${iconButtons}
  fill:  var(--white);
`
