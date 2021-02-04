import {
  ReactNode
} from 'react'

import {
  Container,
  TitleRightSide
} from './styles'

type RightSideAuthenticationProps = {
  children: ReactNode[] | ReactNode
  titleHeader: string
}

export const RightSideAuthentication = ({ children, titleHeader }: RightSideAuthenticationProps) => {
  return (
    <Container>
       <TitleRightSide>{titleHeader}</TitleRightSide>
      {children}
    </Container>
  )
}
