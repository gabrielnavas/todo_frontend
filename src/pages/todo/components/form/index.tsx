import { ReactNode } from 'react'

import {
  Container
} from './styles'

export type FormProps = {
  children: ReactNode | ReactNode[]
}

export const Form = ({ children }: FormProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
