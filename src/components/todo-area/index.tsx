import { Container, Title } from './styles'

type TodoAreaProps = {
  children: any
  title: string
}

export default function TodoArea({children, title}: TodoAreaProps) {
  return (
    <Container>
      <Title>{title}</Title>
      {children}
    </Container>
  )
}
