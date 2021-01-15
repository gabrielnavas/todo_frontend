import React from 'react'
import { 
  Container, 
  Title 
} from './styles'

type HeaderPageProps = {
  children: string | React.ReactNode | React.ReactNode[]
}

export const HeaderPage = ({children}: HeaderPageProps) => {
  return (
    <Container>
      <Title>
        {children}
      </Title>
    </Container>
  )
}
