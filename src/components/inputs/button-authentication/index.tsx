import { MouseEvent, ReactNode } from 'react'

import {
  Container
} from './styles'

type ButtonAuthenticationProps = {
  children: ReactNode | ReactNode[] | string
  disabled?: boolean
  onClick?: (event: MouseEvent<HTMLButtonElement, globalThis.MouseEvent>) => void
}

export const ButtonAuthentication = (props: ButtonAuthenticationProps) => {
  return (
    <Container
      disabled={props.disabled}
      onClick={props.onClick}>
      {props.children}
    </Container>
  )
}
