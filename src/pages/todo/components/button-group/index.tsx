import { ReactNode } from 'react'

import {
  Container
} from './styles'

type ButtonGroupProp = {
  children: ReactNode | ReactNode[]
}

const ButtonGroup = ({ children }: ButtonGroupProp) => {
  return (
    <Container>{children}</Container>
  )
}

export { ButtonGroup }
