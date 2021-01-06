import { TodoAreaID } from '../todo-list'
import { Container, Title } from './styles'

type TodoAreaProps = {
  children: any
  id: TodoAreaID
}

const capitalizeFirstLetter = (title: string) =>
  title.charAt(0).toUpperCase() + title.slice(1)


export default function TodoArea({children, id}: TodoAreaProps) {
  
  return (
    <Container>
      <Title>{capitalizeFirstLetter(id)}</Title>
      {children}
    </Container>
  )
}
