import styled from 'styled-components'
import { InsertNewTodoItemIcon } from 'styles/icons'
import { scrollDefault } from '../../../../styles/scroll-styles'

export const Container = styled.div`
  height: 100%;
  overflow-y: scroll;
  ${scrollDefault}
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: var(--blue);
  cursor: pointer;
  font-size: 22px;
  color: var(--white);
  font-weight: 400;

  &:hover {
    background: var(--blue-dark-alt);
    transition-duration: 0.3s;
  }
  &:focus {
    background: var(--blue-opacity);
  }
`

export const InsertNewTodoItemIconButton = styled(InsertNewTodoItemIcon)`
  margin: 0 7px 0 0;
  height: 30px;
  width: 30px;
  fill: var(--secondary)
`
