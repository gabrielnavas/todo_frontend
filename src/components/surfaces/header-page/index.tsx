import { ReactNode } from 'react'
import {
  Container
} from './styles'

type HeaderPageProps = {
  children: ReactNode | ReactNode[]
}

export const HeaderPage = ({ children }: HeaderPageProps) => {
  return (
    <Container>
      {children}
    </Container>
  )
}
