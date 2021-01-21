import { Container } from './styles'

type TodoAreaProps = {
  children: any
}

export default function TodoArea ({ children }: TodoAreaProps) {
  return (
    <Container>
      {children}
    </Container>
  )
}
