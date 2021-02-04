import {
  ReactNode
} from 'react'

import {
  Container
} from './styles'

type FormAuthenticationProps = {
  children: ReactNode[] | ReactNode
}

export const FormAuthentication = ({ children }: FormAuthenticationProps) => {
  return (
    <Container>{children}</Container>
  )
}
