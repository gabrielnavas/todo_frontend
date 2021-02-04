import {
  ReactNode
} from 'react'

import {
  Container
} from './styles'

type ButtonGroupAuthenticationProps = {
  children: ReactNode[] | ReactNode
}

export const ButtonGroupAuthentication = ({ children }: ButtonGroupAuthenticationProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
