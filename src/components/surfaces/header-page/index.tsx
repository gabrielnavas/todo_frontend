import { ReactNode } from 'react'
import {
  Container,
  Title
} from './styles'

type HeaderPageProps = {
  children: string | ReactNode | ReactNode[]
}

export const HeaderPage = ({ children }: HeaderPageProps) => {
  return (
    <Container>
      <Title>
        {children}
      </Title>
    </Container>
  )
}
