import {
  Container
} from './styles'

type ButtonGroupProp = {
  children: React.ReactNode | React.ReactNode[] 
}

const ButtonGroup = ({children}: ButtonGroupProp) => {
  return (
    <Container>{children}</Container>
  )
}

export { ButtonGroup }