import React from 'react'
import { 
  Container, 
  Title 
} from './styles'

type HeaderPageProps = {
  children: string
}

export default function HeaderPage({children}: HeaderPageProps) {
  return (
    <Container>
      <Title>
        {children}
      </Title>
    </Container>
  )
}
